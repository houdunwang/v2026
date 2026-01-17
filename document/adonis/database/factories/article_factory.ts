import Article from '#models/article';
import Category from '#models/category';
import factory from '@adonisjs/lucid/factories';

export const ArticleFactory = factory
  .define(Article, async ({ faker }) => {
    const category = await Category.query().orderByRaw('rand()').first();
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      category_id: category?.id,
    }
  })
  .build()
