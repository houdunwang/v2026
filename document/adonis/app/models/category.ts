import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Article from './article.js'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare parentId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Category, {
    localKey: 'id',
    foreignKey: 'parentId',
  })
  declare categories: HasMany<typeof Category>

  @hasMany(() => Article, {
    localKey: 'id',
    foreignKey: 'categoryId',
  })
  declare articles: HasMany<typeof Article>
}
