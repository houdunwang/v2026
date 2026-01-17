import Article from '#models/article'
import { createArticleValidator, updateArticleValidator } from '#validators/article'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class ArticlesController {
  async index({ request }: HttpContext) {
    return await Article.query().paginate(request.input('page') || 1)
  }

  @inject()
  async store({ request }: HttpContext, article: Article) {
    const payload = await createArticleValidator.validate({ request })
    return await article.fill(payload).save();
  }

  async show({ params }: HttpContext) {
    return await Article.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const payload = await updateArticleValidator.validate({ request })
    const article = await Article.findOrFail(params.id)
    return await article.merge(payload).save();
  }
  async destroy({ params }: HttpContext) {
    const article = await Article.findOrFail(params.id)
    await article.delete()
  }
}
