import vine from '@vinejs/vine'
import { FormValidator } from './zh/formValidator.js'
import { maxRows } from './rules/maxRows.js'

export const createCategoryValidator = FormValidator.rules(() => {
  return {
    title: vine
      .string()
      .minLength(3)
      .maxLength(20)
      .use(maxRows({ max: 5, fieldName: 'parentId' })),
  }
})

export const updateCategoryValidator = FormValidator.rules(() => ({
  title: vine
    .string()
    .minLength(3)
    .maxLength(20)
    .unique(async (db, value, field) => {
      //当前用户  http route controller auth
      const category = await db
        .from('categories')
        .where('title', value)
        .whereNot('id', field.data.params.id)
        .first()
      return !category
    }),
}))
