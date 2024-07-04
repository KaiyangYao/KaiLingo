import { redirect } from 'next/navigation'

import { getUserProgress } from '@/db/queries'
import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'

import { Header } from './header'

const LearnPage = async () => {
  const userProgress = await getUserProgress()

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title="Spanish"></Header>
        <div className="space-y-4">
          <div className="h-[700px] bg-blue-500" />
          <div className="h-[700px] bg-blue-500" />
          <div className="h-[700px] bg-blue-500" />
          <div className="h-[700px] bg-blue-500" />
          <div className="h-[700px] bg-blue-500" />
          <div className="h-[700px] bg-blue-500" />
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'Spanish', imageSrc: '/flags/spain.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  )
}

export default LearnPage
