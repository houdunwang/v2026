import vine from '@vinejs/vine'
import { FormValidator } from './zh/formValidator.js'

export const uploadImageValidator = FormValidator.rules(() => {
  return {
    file: vine.file({
      size: '2mb',
      extnames: ['jpg', 'jpeg', 'png', 'gif'],
    }),
  }
})
