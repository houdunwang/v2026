import type { UseFetchOptions } from '#app'
import type { FormSubmitEvent } from '@nuxt/ui'
const useCustomFetch = () => {
  const validateStore = useValidateStore()
  const toast = useToast()
  const customFetch = $fetch.create({
    baseURL: 'http://localhost:3333',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + useCookie('token').value,
    },
    onRequest({ request }) {
      console.log(request)
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
          navigateTo('/login')
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

interface IOPtions<T> extends UseFetchOptions<T> {
  onSuccess?: (data: T) => void
}
export const useMutation = <T>(
  url: string,
  data: Ref<Record<string, any>>,
  options: IOPtions<T>
) => {
  const res = useFetch(url, {
    immediate: false,
    server: false,
    watch: false,
    body: data,
    $fetch: useCustomFetch(),
    onResponse(res) {
      if (options.onSuccess) {
        options.onSuccess(res.response._data as T)
      }
      return res.response._data as T
    },
    ...options,
  })

  return {
    ...res,
    onSubmit: (payload: FormSubmitEvent<any>) => {
      data.value = payload.data
      res.execute()
    },
  }
}
