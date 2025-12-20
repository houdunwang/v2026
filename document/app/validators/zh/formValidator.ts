import type { HttpContext } from '@adonisjs/core/http';
import vine, { SimpleMessagesProvider } from "@vinejs/vine";
import { validateFields, validateMessage } from "./lang.js";
export const validateMessagesProvider = (messages = {}, fields = {}) => {
  return {
    messagesProvider: new SimpleMessagesProvider({
      ...validateMessage,
      ...messages
    }, {
      ...validateFields,
      ...fields
    })
  }
}

type CtxType = Partial<Omit<HttpContext, 'request'>> & Pick<HttpContext, 'request'>

export class FormValidator<T extends Record<string, any>> {
  private validateFields: Record<string, any> = {}
  private validateMessages: Record<string, any> = {}
  constructor(protected callback: (ctx: CtxType) => T) {
  }

  static rules<D extends Record<string, any>>(callback: (ctx: CtxType) => D) {
    return new FormValidator(callback)
  }

  execute<D extends Record<string, any>>(rules: D) {
    return vine.compile(
      vine.object(rules)
    )
  }

  messages(messages: Record<string, any>) {
    this.validateMessages = messages
    return this;
  }

  fields(fields: Record<string, any>) {
    this.validateFields = fields
    return this;
  }

  async validate(ctx: CtxType) {
    const rules = this.callback(ctx)
    const compile = this.execute(rules)
    const messageProvider = validateMessagesProvider(this.validateMessages, this.validateFields)
    const result = await ctx.request!.validateUsing(compile!, messageProvider)
    return result as ReturnType<typeof compile.validate>
  }
}
