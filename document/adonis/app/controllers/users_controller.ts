import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async info({ auth }: HttpContext) {
    if (await auth.checkUsing(['api'])) {
      return auth.user
    }
  }
}
