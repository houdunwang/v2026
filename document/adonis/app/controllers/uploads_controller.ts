import { uploadImageValidator } from '#validators/upload'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'

export default class UploadsController {
  async image({ request }: HttpContext) {
    const payload = await uploadImageValidator.validate({ request })
    const image = payload.file
    const key = `images/${cuid()}.${image.extname}`
    await image.moveToDisk(key)
    return {
      message: 'Image uploaded',
      url: image.meta.url,
    }
  }
}
