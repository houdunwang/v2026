import { CategoryFactory } from '#database/factories/category_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CategorySeeder extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    const categories = await CategoryFactory.createMany(5)
    await Promise.all(
      categories.map(async (category) => {
        return category.related('categories').createMany(await CategoryFactory.makeMany(4))
      })
    )
  }
}
