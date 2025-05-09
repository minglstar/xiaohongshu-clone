'use client'

import { useSearchParams } from 'next/navigation'
import { channels } from '@/components/layout/ChannelNav'

/**
 * 主页面组件
 * 根据频道ID加载不同内容
 */
export default function Home() {
  const searchParams = useSearchParams()
  const channelId = searchParams.get('channel_id') || 'homefeed_recommend'

  // 根据 channelId 加载不同内容
  return (
    <div className="channel-content">
      <h1 className="sr-only">小红书 - {getChannelName(channelId)}</h1>

      {/* 根据频道ID渲染不同内容 */}
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold">当前频道: {getChannelName(channelId)}</h2>
        {/* 这里放置频道内容 */}
      </div>
    </div>
  )
}

/**
 * 根据频道ID获取频道名称
 */
function getChannelName(channelId: string): string {
  const channel = channels.find(c => c.channelId === channelId)
  return channel?.label || '推荐'
}
