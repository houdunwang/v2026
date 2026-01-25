import Article from '#models/article'
import Category from '#models/category'
import factory from '@adonisjs/lucid/factories'
import { readFileSync } from 'node:fs'

export const ArticleFactory = factory
  .define(Article, async ({ faker }) => {
    const category = await Category.query().orderByRaw('rand()').first()
    return {
      title: faker.lorem.sentence(),
      content: readFileSync('./database/factories/data/demo.md', 'utf-8'),
      category_id: category?.id,
    }
  })
  .build()
