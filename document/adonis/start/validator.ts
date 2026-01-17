import { validateFields, validateMessage } from '#validators/zh/lang'
import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider(validateMessage, validateFields)
