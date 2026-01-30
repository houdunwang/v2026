import db from '@adonisjs/lucid/services/db'
import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

type Options = {}

async function categoryParentIdRule(value: unknown, _options: Options, field: FieldContext) {
  const res = await db.from('categories').whereNull('parent_id').count('*', 'total').first()
  const id = field.data.id
  if (value == 0 && !id) {
    if (res.total >= 5) {
      field.report('顶级分类不能超过 5 个', 'categoryParentId', field)
    }
  }
  //更新操作
  if (id && value == 0) {
    const res = await await db.from('categories').whereNull('parent_id').count('*', 'total').first()
    if (res.total >= 5) {
      field.report('顶级分类不能超过 5 个', 'categoryParentId', field)
    }
  }
}

export const categoryParentId = vine.createRule(categoryParentIdRule)
