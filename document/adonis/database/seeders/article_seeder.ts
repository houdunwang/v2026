import { ArticleFactory } from '#database/factories/article_factory'
import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    // Write your database queries inside the run method
    // await ArticleFactory.createMany(50)
    const categories = await Category.query().whereNotNull('parentId')

    await Promise.all(
      categories.map(async (category) => {
        return category.related('articles').createMany(await ArticleFactory.makeMany(5))
      })
    )
  }
}
