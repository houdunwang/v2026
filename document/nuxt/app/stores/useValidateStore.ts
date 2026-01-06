export const useValidateStore = defineStore('validate', () => {
  const errors = ref<{ name: string; message: string }[]>([])

  const addError = (name: string, message: string) => {
    errors.value.push({ name, message })
  }

  const reset = () => {
    errors.value = []
  }

  const get = (name: string) => {
    return errors.value.find((error) => error.name === name)
  }
  return { errors, addError, reset, get }
})
