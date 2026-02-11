import type { AssemblerHookHandler } from '@adonisjs/core/types/app'
import { cpSync } from 'node:fs'

const buildHook: AssemblerHookHandler = async ({}) => {
  cpSync('./database/factories/data', './build/database/factories/data', {
    recursive: true,
  })
  cpSync('./.env.production', './build/.env')
}

export default buildHook
