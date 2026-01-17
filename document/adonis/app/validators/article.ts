import vine from '@vinejs/vine'
import { FormValidator } from './zh/formValidator.js'

export const createArticleValidator = FormValidator.rules(() => ({
  title: vine.string().minLength(3).maxLength(255),
  content: vine.string().minLength(3),
  categoryId: vine.number().exists(async (db, value, _field) => {
    return !! await db.from('categories').where('id', value).first()
  })
}))

export const updateArticleValidator = FormValidator.rules(() => ({
  title: vine.string().minLength(3).maxLength(255),
  content: vine.string().minLength(3),
  categoryId: vine.number().exists(async (db, value, _field) => {
    return !! await db.from('categories').where('id', value).first()
  })
}))
