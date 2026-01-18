import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import BasesController from './bases_controller.js'
import { loginValidator, registerValidator } from '#validators/auth'

export default class AuthController extends BasesController {
  async login({ response, request, auth }: HttpContext) {
    // return response.abort('错误', 403)
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(null)
    //   }, 2000)
    // })
    const payload = await loginValidator.validate({ request })
    const user = await User.verifyCredentials(payload.name, payload.password)
    const token = await auth.use('api').createToken(user)
    return { token, user }
  }

  async register({ request, auth }: HttpContext) {
    const payload = await registerValidator.validate({ request })
    const user = await User.create(payload)
    const token = await auth.use('api').createToken(user)
    return { token, user }
  }
}
