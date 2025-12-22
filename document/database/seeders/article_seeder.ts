import { ArticleFactory } from '#database/factories/article_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    // Write your database queries inside the run method
    await ArticleFactory.createMany(50)
  }
}
