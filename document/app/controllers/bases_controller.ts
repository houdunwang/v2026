// import type { HttpContext } from '@adonisjs/core/http'

import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default abstract class BasesController {
  constructor(protected ctx: HttpContext) {
  }

  success(message = '请求失败', data = {}) {
    return this.ctx.response.status(200).json({ data, message })
  }

  error(message = '请求失败', code = 400) {
    return this.ctx.response.status(code).json({ message })
  }
}
