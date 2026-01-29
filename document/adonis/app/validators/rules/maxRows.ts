import Category from '#models/category'
import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

type Options = {
  max: number
  fieldName: string
}

async function maxRowsRule(_value: unknown, options: Options, field: FieldContext) {
  const res = await Category.query().whereNull(options.fieldName).count('*', 'total').first()
  if (res?.$extras['total'] > options.max) {
    field.report('{{ field }} 不能超过 {{ max }} 个', 'maxRowsRule', field, { max: options.max })
  }
}

export const maxRows = vine.createRule(maxRowsRule)
