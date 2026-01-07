import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import BasesController from './bases_controller.js'
import { loginValidator, registerValidator } from '#validators/auth'

export default class AuthController extends BasesController {
  async login({ request, auth, response }: HttpContext) {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    const payload = await loginValidator.validate({ request })
    const user = await User.verifyCredentials(payload.name, payload.password)
    const token = await auth.use('api').createToken(user)
    // await auth.use('web').login(user)
    return { token, user }
  }

  async register({ request, auth }: HttpContext) {
    const payload = await registerValidator.validate({ request })
    const user = await User.create(payload)
    // const token = await auth.use('api').createToken(user)
    // return { token, user }
  }

  async logout({ auth }: HttpContext) {
    await auth.use('api').invalidateToken()
    return { message: '退出成功' }
  }
}
