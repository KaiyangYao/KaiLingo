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

    console.log('Seeding finished ')
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed the database')
  }
}

main()
