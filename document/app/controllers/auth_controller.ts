import User from '#models/user';
import type { HttpContext } from '@adonisjs/core/http';
import BasesController from './bases_controller.js';

export default class AuthController extends BasesController {
  async login({ request, auth }: HttpContext) {
    const { name, password } = request.all();
    try {
      const user = await User.verifyCredentials(name, password)
      const token = await auth.use('api').createToken(user)
      return { token, user }
    } catch (error) {
      return this.error('用户名或密码错误')
    }

    // const user = await User.findBy('name', name);
    // if (!user) {
    //   return this.error('用户不存在')
    // }
    // if (!await hash.verify(user.password, password)) {
    //   return this.error('密码错误')
    // }
    // const token = await User.accessTokens.create(user)
    // return { token, user }
  }

  async register({ request, response }: HttpContext) {

  }
}
