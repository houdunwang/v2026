import { UserFactory } from '#database/factories/user_factory'
import { Role } from '#enums/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    // Write your database queries inside the run method
    const users = await UserFactory.createMany(3)
    let user = users[0]
    user.name = 'admin'
    user.role = Role.ADMIN
    await user.save();

    user = users[1]
    user.name = 'user'
    await user.save();

  }
}
