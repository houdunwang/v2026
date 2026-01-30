import vine from '@vinejs/vine'
import { categoryParentId } from './rules/categoryParentIdRule.js'
import { FormValidator } from './zh/formValidator.js'

export const createCategoryValidator = FormValidator.rules(() => {
  return {
    title: vine.string().minLength(3).maxLength(50),
    parentId: vine.number().use(categoryParentId({})),
  }
})

export const updateCategoryValidator = FormValidator.rules(() => ({
  title: vine
    .string()
    .minLength(3)
    .maxLength(50)
    .unique(async (db, value, field) => {
      //当前用户  http route controller auth
      const category = await db
        .from('categories')
        .where('title', value)
        .whereNot('id', field.data.params.id)
        .first()
      return !category
    }),
  parentId: vine.number().use(categoryParentId({})),
}))
