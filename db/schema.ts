import { pgTable, integer, text } from 'drizzle-orm/pg-core'

export const courses = pgTable('courses', {
  id: integer('id').notNull().primaryKey(),
  title: text('title').notNull(),
  imageSrc: text('image_src').notNull(),
})
