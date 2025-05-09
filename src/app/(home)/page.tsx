'use client'

import { useSearchParams } from 'next/navigation'
import ChannelNav, { channels } from '@/components/layout/ChannelNav'
import MainContent from '@/components/layout/MainContent'
/**
 * 主页面组件
 * 根据频道ID加载不同内容
 */
export default function Home() {
  const searchParams = useSearchParams()
  const channelId = searchParams.get('channel_id') || 'homefeed_recommend'

  // 根据 channelId 加载不同内容
  return (
    <MainContent>
      <ChannelNav />
      {/* 根据频道ID渲染不同内容 */}
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold">当前频道: {getChannelName(channelId)}</h2>
        {/* 这里放置频道内容 */}
      </div>
    </MainContent>
  )
}

/**
 * 根据频道ID获取频道名称
 */
function getChannelName(channelId: string): string {
  const channel = channels.find(c => c.channelId === channelId)
  return channel?.label || '推荐'
}
