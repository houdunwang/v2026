import { CategoryFactory } from '#database/factories/category_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CategorySeeder extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    // Write your database queries inside the run method
    await CategoryFactory.createMany(3)
  }
}
