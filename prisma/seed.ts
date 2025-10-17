import { PrismaClient } from '../src/generated/prisma'
import { faker } from '@faker-js/faker/locale/zh_CN'

const prisma = new PrismaClient()

// 配置：控制生成数据的数量
const CONFIG = {
  users: 20,
  tags: 15,
  postsPerUser: 3,
  commentsPerPost: 5,
  likesPerPost: 10,
  followsPerUser: 5,
}

/**
 * 创建用户数据
 * 使用 upsert 保证幂等性（可重复执行）
 */
async function createUsers() {
  console.log('📝 创建用户数据...')

  const users = []

  for (let i = 0; i < CONFIG.users; i++) {
    const phone = `138${String(i).padStart(8, '0')}`
    const user = await prisma.user.upsert({
      where: { phone },
      update: {},
      create: {
        phone,
        nickname: faker.person.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        bio: faker.person.bio(),
      },
    })
    users.push(user)
  }

  console.log(`✅ 创建了 ${users.length} 个用户`)
  return users
}

/**
 * 创建标签数据
 */
async function createTags() {
  console.log('🏷️  创建标签数据...')

  const tagNames = [
    '穿搭',
    '美妆',
    '美食',
    '旅行',
    '健身',
    '读书',
    '摄影',
    '宠物',
    '家居',
    '学习',
    '数码',
    '电影',
    '音乐',
    '游戏',
    '职场',
  ]

  const tags = []

  for (const name of tagNames) {
    const tag = await prisma.tag.upsert({
      where: { name },
      update: {},
      create: {
        name,
        description: `关于${name}的精彩内容`,
      },
    })
    tags.push(tag)
  }

  console.log(`✅ 创建了 ${tags.length} 个标签`)
  return tags
}

/**
 * 创建帖子数据
 */
async function createPosts(users: Awaited<ReturnType<typeof createUsers>>) {
  console.log('📮 创建帖子数据...')

  const posts = []

  for (const user of users) {
    for (let i = 0; i < CONFIG.postsPerUser; i++) {
      const isPublished = Math.random() > 0.2 // 80% 的帖子为已发布状态

      const post = await prisma.post.create({
        data: {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(3),
          image: Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () =>
            faker.image.url()
          ),
          published: isPublished,
          publishedAt: isPublished ? faker.date.recent({ days: 30 }) : null,
          authorId: user.id,
        },
      })

      posts.push(post)

      // 更新用户的 postsCount
      await prisma.user.update({
        where: { id: user.id },
        data: { postsCount: { increment: 1 } },
      })
    }
  }

  console.log(`✅ 创建了 ${posts.length} 篇帖子`)
  return posts
}

/**
 * 创建帖子与标签的关联
 */
async function createPostTags(
  posts: Awaited<ReturnType<typeof createPosts>>,
  tags: Awaited<ReturnType<typeof createTags>>
) {
  console.log('🔗 创建帖子标签关联...')

  let count = 0

  for (const post of posts) {
    // 每篇帖子随机关联 1-3 个标签
    const tagCount = Math.floor(Math.random() * 3) + 1
    const selectedTags = faker.helpers.arrayElements(tags, tagCount)

    for (const tag of selectedTags) {
      // 检查是否已存在该关联
      const existing = await prisma.postTag.findUnique({
        where: {
          postId_tagId: {
            postId: post.id,
            tagId: tag.id,
          },
        },
      })

      if (!existing) {
        await prisma.postTag.create({
          data: {
            postId: post.id,
            tagId: tag.id,
          },
        })

        // 更新标签的 postCount
        await prisma.tag.update({
          where: { id: tag.id },
          data: { postCount: { increment: 1 } },
        })

        count++
      }
    }
  }

  console.log(`✅ 创建了 ${count} 个帖子标签关联`)
}

/**
 * 创建评论数据
 */
async function createComments(
  users: Awaited<ReturnType<typeof createUsers>>,
  posts: Awaited<ReturnType<typeof createPosts>>
) {
  console.log('💬 创建评论数据...')

  let count = 0

  // 只为已发布的帖子创建评论
  const publishedPosts = posts.filter((p) => p.published)

  for (const post of publishedPosts) {
    const commentCount = Math.floor(Math.random() * CONFIG.commentsPerPost) + 1

    for (let i = 0; i < commentCount; i++) {
      const author = faker.helpers.arrayElement(users)

      const comment = await prisma.comment.create({
        data: {
          content: faker.lorem.sentence(),
          postId: post.id,
          authorId: author.id,
        },
      })

      // 更新帖子的 commentCount
      await prisma.post.update({
        where: { id: post.id },
        data: { commentCount: { increment: 1 } },
      })

      count++

      // 20% 的概率创建回复评论
      if (Math.random() < 0.2) {
        const replier = faker.helpers.arrayElement(users)
        await prisma.comment.create({
          data: {
            content: faker.lorem.sentence(),
            postId: post.id,
            authorId: replier.id,
            parentId: comment.id,
          },
        })

        await prisma.post.update({
          where: { id: post.id },
          data: { commentCount: { increment: 1 } },
        })

        count++
      }
    }
  }

  console.log(`✅ 创建了 ${count} 条评论`)
}

/**
 * 创建点赞数据
 */
async function createLikes(
  users: Awaited<ReturnType<typeof createUsers>>,
  posts: Awaited<ReturnType<typeof createPosts>>
) {
  console.log('👍 创建点赞数据...')

  let count = 0

  // 只为已发布的帖子创建点赞
  const publishedPosts = posts.filter((p) => p.published)

  for (const post of publishedPosts) {
    const likeCount = Math.floor(Math.random() * CONFIG.likesPerPost) + 1
    const likers = faker.helpers.arrayElements(users, likeCount)

    for (const liker of likers) {
      // 检查是否已存在该点赞
      const existing = await prisma.like.findUnique({
        where: {
          postId_userId: {
            postId: post.id,
            userId: liker.id,
          },
        },
      })

      if (!existing) {
        await prisma.like.create({
          data: {
            postId: post.id,
            userId: liker.id,
          },
        })

        // 更新帖子的 likeCount
        await prisma.post.update({
          where: { id: post.id },
          data: { likeCount: { increment: 1 } },
        })

        count++
      }
    }
  }

  console.log(`✅ 创建了 ${count} 个点赞`)
}

/**
 * 创建关注关系
 */
async function createFollows(users: Awaited<ReturnType<typeof createUsers>>) {
  console.log('🤝 创建关注关系...')

  let count = 0

  for (const user of users) {
    const followCount = Math.floor(Math.random() * CONFIG.followsPerUser) + 1
    // 确保不关注自己
    const availableUsers = users.filter((u) => u.id !== user.id)
    const followings = faker.helpers.arrayElements(availableUsers, followCount)

    for (const following of followings) {
      // 检查是否已存在该关注关系
      const existing = await prisma.follow.findUnique({
        where: {
          followerId_followingId: {
            followerId: user.id,
            followingId: following.id,
          },
        },
      })

      if (!existing) {
        await prisma.follow.create({
          data: {
            followerId: user.id,
            followingId: following.id,
          },
        })

        // 更新关注者的 followingCount
        await prisma.user.update({
          where: { id: user.id },
          data: { followingCount: { increment: 1 } },
        })

        // 更新被关注者的 followersCount
        await prisma.user.update({
          where: { id: following.id },
          data: { followersCount: { increment: 1 } },
        })

        count++
      }
    }
  }

  console.log(`✅ 创建了 ${count} 个关注关系`)
}

/**
 * 主函数：按顺序执行所有数据创建操作
 */
async function main() {
  console.log('🌱 开始数据填充...\n')

  // 可选：在开发环境中先清理旧数据
  if (process.env.NODE_ENV !== 'production') {
    console.log('🧹 清理旧数据...')
    await prisma.like.deleteMany()
    await prisma.follow.deleteMany()
    await prisma.comment.deleteMany()
    await prisma.postTag.deleteMany()
    await prisma.post.deleteMany()
    await prisma.tag.deleteMany()
    await prisma.user.deleteMany()
    console.log('✅ 清理完成\n')
  }

  try {
    // 1. 创建基础数据（用户和标签）
    const users = await createUsers()
    const tags = await createTags()

    // 2. 创建内容数据（帖子）
    const posts = await createPosts(users)

    // 3. 创建关联数据
    await createPostTags(posts, tags)
    await createLikes(users, posts)
    await createFollows(users)
    await createComments(users, posts)

    console.log('\n✨ 数据填充完成！')
    console.log(`
📊 数据统计：
  - 用户: ${users.length}
  - 标签: ${tags.length}
  - 帖子: ${posts.length}
  - 已发布帖子: ${posts.filter((p) => p.published).length}
    `)
  } catch (error) {
    console.error('❌ 数据填充失败:', error)
    throw error
  }
}

// 执行主函数
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ 发生错误:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
