import { useRequestEvent } from 'nuxt/app'
import { parseCookies } from 'h3'
export const useApi = () => {
  const validateStore = useValidateStore()
  const toast = useToast()
  const customFetch = $fetch.create({
    baseURL: 'http://localhost:3333',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + useCookie('token').value,
    },
    onRequest({ request, options }) {
      options.headers.set('Authorization', 'Bearer ' + useCookie('token').value)
      // console.log('useCookie("token").value', useCookie('token').value)
      // const event = useRequestEvent()
      // if (import.meta.server && event) {
      //   try {
      //     const cookies = parseCookies(event) as Record<string, string>
      //     const cookieString = Object.entries(cookies)
      //       .map(([key, value]) => {
      //         return `${key}=${value}`
      //       })
      //       .join(';')
      //     console.log(cookieString)
      //     options.headers.set('Cookie', cookieString)
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
      validateStore.reset()
    },
    onResponse({ response }) {
      return response._data
    },
    onResponseError({ response }) {
      switch (response?.status) {
        case 401:
          toast.add({
            title: '请登录后操作',
          })
          navigateTo('/auth/login')
          break
        case 422:
          const errors = response._data.errors
          errors.forEach((error: { field: string; message: string }) => {
            validateStore.addError(error.field, error.message)
          })
          break
        case 403:
          toast.add({
            title: '禁止访问',
            description: '您没有权限访问该资源',
          })
          break
        default:
          toast.add({
            title: '服务器错误',
          })
          break
      }
    },
  })
  return customFetch
}
