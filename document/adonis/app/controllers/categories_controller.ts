import Category from '#models/category'
import { createCategoryValidator, updateCategoryValidator } from '#validators/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async index({}: HttpContext) {
    return await Category.all()
  }

  async store({ request }: HttpContext) {
    const payload = await createCategoryValidator.validate({ request })
    return await Category.create(payload)
  }

  async show({ params }: HttpContext) {
    return await Category.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const payload = await updateCategoryValidator.validate({ request })
    const category = await Category.findOrFail(params.id)
    category.merge(payload)
    return await category.save()
  }

  async destroy({ params }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    await category.delete()
  }
}
