import { ArticleFactory } from '#database/factories/article_factory'
import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    // Write your database queries inside the run method
    // await ArticleFactory.createMany(50)
    const categoryTitles = ['前端开发', '后端开发', '数据库', '测试部署', '云服务']
    const categories = await Category.query().whereNotNull('parentId')
    const rootCategories = await Category.query().whereNull('parentId')
    await Promise.all(
      rootCategories.map(async (category, index) => {
        category['title'] = categoryTitles[index]
        await category.save()
      })
    )
    await Promise.all(
      categories.map(async (category) => {
        return category.related('articles').createMany(await ArticleFactory.makeMany(5))
      })
    )
  }
}
