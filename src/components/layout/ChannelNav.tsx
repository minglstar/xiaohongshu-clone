'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import ChannelItem from '../navigation/ChannelItem'

// 小红书频道URL格式: https://www.xiaohongshu.com/explore?channel_id=homefeed.[tag]
// 我们使用相似的格式: /?channel_id=homefeed.[tag]

/**
 * 频道数据配置
 * 包含推荐和各个分类频道
 */
export const channels = [
  {
    label: '推荐',
    channelId: 'homefeed_recommend',
  },
  {
    label: '穿搭',
    channelId: 'homefeed.fashion_v3',
  },
  {
    label: '美食',
    channelId: 'homefeed.food_v3',
  },
  {
    label: '彩妆',
    channelId: 'homefeed.cosmetics_v3',
  },
  {
    label: '影视',
    channelId: 'homefeed.movie_and_tv_v3',
  },
  {
    label: '职场',
    channelId: 'homefeed.career_v3',
  },
  {
    label: '情感',
    channelId: 'homefeed.love_v3',
  },
  {
    label: '家居',
    channelId: 'homefeed.household_product_v3',
  },
  {
    label: '游戏',
    channelId: 'homefeed.gaming_v3',
  },
  {
    label: '旅行',
    channelId: 'homefeed.travel_v3',
  },
  {
    label: '健身',
    channelId: 'homefeed.fitness_v3',
  },
]

/**
 * 频道导航栏组件
 * 显示所有频道并处理频道切换逻辑
 */
const ChannelNav = ({ onItemClick }: { onItemClick?: () => void }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentChannelId = searchParams.get('channel_id') || 'homefeed_recommend'

  return (
    // todo: 滑不动
    <div className="flex h-[40px] items-center scroll-auto pl-2">
      {channels.map(channel => (
        <ChannelItem
          key={channel.channelId}
          label={channel.label}
          isSelected={currentChannelId === channel.channelId}
          onClick={() => {
            // 导航到对应频道
            router.push(`/?channel_id=${channel.channelId}`)
            if (onItemClick) onItemClick()
          }}
        />
      ))}
    </div>
  )
}

export default ChannelNav
