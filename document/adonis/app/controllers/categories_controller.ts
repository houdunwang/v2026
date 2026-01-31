import Category from '#models/category'
import { createCategoryValidator, updateCategoryValidator } from '#validators/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async index({}: HttpContext) {
    return await Category.query()
      .whereNull('parentId')
      .orderBy('sort', 'asc')
      .preload('categories', (query) => {
        query
          .select('id', 'parentId', 'title')
          .orderBy('sort', 'asc')
          .preload('articles', (query) => {
            query.select('id', 'title', 'category_id')
          })
      })
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

  async sort({ request }: HttpContext) {
    const categories = request.input('categories')
    for (let [index, category] of categories.entries()) {
      const model = await Category.findOrFail(category.id)
      model.sort = index
      await model.save()
      for (let [pos, item] of category.categories.entries()) {
        const child = await Category.findOrFail(item.id)
        child.sort = pos
        await child.save()
      }
    }

    console.log(categories)
  }
}
