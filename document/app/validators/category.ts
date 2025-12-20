import vine from '@vinejs/vine'
import { FormValidator, } from './zh/formValidator.js'

const rules = {
  title: vine.string().minLength(3).maxLength(20)
}

export const createCategoryValidator = FormValidator.rules(() => {
  return rules
})

export const updateCategoryValidator = FormValidator.rules(() => (
  {
    title: vine.string().minLength(3).maxLength(5)
      .unique(async (db, value, field) => {
        //当前用户  http route controller auth
        const category = await db.from('categories').where('title', value)
          .whereNot('id', field.data.params.id).first()
        return !category
      })
  }
))


