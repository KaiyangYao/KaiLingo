import { cache } from 'react'
import db from '@/db/drizzle'

// cache: will only call the query once
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany()

  return data
})
