import 'dotenv/config'

import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

import * as schema from '../db/schema'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log('Seeding database')

    await db.delete(schema.courses)
    await db.delete(schema.userProgress)
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)

    await db.insert(schema.courses).values([
      { id: 1, title: 'Chinese', imageSrc: '/flags/china.svg' },
      { id: 2, title: 'Japanese', imageSrc: '/flags/japan.svg' },
      { id: 3, title: 'Korean', imageSrc: '/flags/south-korea.svg' },
      { id: 4, title: 'English', imageSrc: '/flags/us.svg' },
      { id: 5, title: 'French', imageSrc: '/flags/france.svg' },
      { id: 6, title: 'Spanish', imageSrc: '/flags/spain.svg' },
      { id: 7, title: 'Italian', imageSrc: '/flags/italy.svg' },
      { id: 8, title: 'German', imageSrc: '/flags/germany.svg' },
    ])

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 2,
        title: 'Unit 1',
        description: 'Learn the basic of Japanese',
        order: 1,
      },
    ])

    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, order: 1, title: 'Hiragana 1' },
      { id: 2, unitId: 1, order: 2, title: 'Hiragana 2' },
    ])

    await db.insert(schema.challenges).values([
      { id: 1, lessonId: 1, type: 'SELECT', order: 1, question: 'Which one of these is "a"' },
      { id: 2, lessonId: 1, type: 'SELECT', order: 2, question: 'Which one of these is "i"' },
    ])

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: '/a.svg',
        correct: true,
        text: 'あ',
        audioSrc: '/jp_a.mp3',
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: '/e.svg',
        correct: true,
        text: 'え',
        audioSrc: '/jp_e.mp3',
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: '/u.svg',
        correct: true,
        text: 'う',
        audioSrc: '/jp_u.mp3',
      },
    ])

    console.log('Seeding finished ')
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed the database')
  }
}

main()
