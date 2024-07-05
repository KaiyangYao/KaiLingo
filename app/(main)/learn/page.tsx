import { redirect } from 'next/navigation'

import { getUserProgress } from '@/db/queries'
import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'

import { Header } from './header'

const LearnPage = async () => {
  const userProgress = await getUserProgress()

  if (!userProgress || !userProgress.activeCourse) {
    // This is the same as return redirect("/courses")
    redirect("/courses")
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title}></Header>
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
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  )
}

export default LearnPage
