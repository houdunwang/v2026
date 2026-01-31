import db from '@adonisjs/lucid/services/db'
import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

type Options = {}

async function categoryParentIdRule(value: unknown, _options: Options, field: FieldContext) {
  const id = field.data.id
  const res = await db
    .from('categories')
    .whereNull('parent_id')
    .andWhere('id', '!=', id || 0)
    .count('*', 'total')
    .first()
  if (value == 0 && res.total >= 5) {
    field.report('顶级分类不能超过 5 个', 'categoryParentId', field)
  }
  //更新操作
  if (id && value != 0) {
    const res = await db.from('categories').where('parent_id', id).first()
    if (res) field.report('栏目有子栏目不允许修改', 'categoryParentId', field)
  }
}

export const categoryParentId = vine.createRule(categoryParentIdRule)
