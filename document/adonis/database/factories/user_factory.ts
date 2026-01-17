import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      name: faker.person.fullName(),
      password: 'admin888'
    }
  })
  .build()
