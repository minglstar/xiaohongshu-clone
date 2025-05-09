'use client'

import { cn } from '@/lib/utils'
import { MessageCircle, Sprout, Star, ThumbsUp } from 'lucide-react'

/**
 * 登录提示组件
 * 显示登录后可以获得的功能和权益
 * 用于鼓励用户登录
 */
const LoginPrompt = () => {
  return (
    <div
      className={cn(
        'z-0 h-[155px] w-full cursor-pointer p-4',
        'rounded-xl border-[1px] border-solid border-gray-200 bg-white',
        'dark:border-gray-700 dark:text-gray-400'
      )}
    >
      <p className="mb-3 text-[14px] font-medium text-gray-900 dark:text-gray-300">
        马上登录即可
      </p>
      <div className="mb-2 flex text-gray-500">
        <ThumbsUp size={16} className="mr-2" />
        <span className="text-[14px] leading-[120%]">刷到更懂你的优质内容</span>
      </div>
      <div className="mb-2 flex text-gray-500">
        <Sprout size={16} className="mr-2" />
        <span className="text-[14px] leading-[120%]">搜索最新种草、拔草信息</span>
      </div>
      <div className="mb-2 flex text-gray-500">
        <Star size={16} className="mr-2" />
        <span className="text-[14px] leading-[120%]">查看收藏、点赞的笔记</span>
      </div>
      <div className="mb-2 flex text-gray-500">
        <MessageCircle size={16} className="mr-2" />
        <span className="text-[14px] leading-[120%]">与他人更好地互动、交流</span>
      </div>
    </div>
  )
}

export default LoginPrompt