import { redirect } from 'next/navigation'

import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from '@/db/queries'
import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'

import { Unit } from './unit'
import { Header } from './header'

const LearnPage = async () => {
  const userProgressData = getUserProgress()
  const courseProgressData = getCourseProgress()
  const unitsData = getUnits()
  const lessonPercentageData = getLessonPercentage()

  const [userProgress, courseProgress, units, lessonPercentage] = await Promise.all([
    userProgressData,
    courseProgressData,
    unitsData,
    lessonPercentageData,
  ])

  if (!userProgress || !userProgress.activeCourse) {
    // This is the same as return redirect("/courses")
    redirect('/courses')
  }

  if (!courseProgress) {
    redirect('/courses')
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={courseProgress.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
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
