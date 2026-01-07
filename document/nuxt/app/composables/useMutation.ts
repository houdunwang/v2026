import type { UseFetchOptions } from '#app'
import type { FormSubmitEvent } from '@nuxt/ui'

interface IOPtions<T> extends UseFetchOptions<T> {
  onSuccess?: (data: T) => void
  body: Ref<Record<string, any>>
}
export const useMutation = <T>(url: string, options: IOPtions<T>) => {
  const res = useFetch(url, {
    immediate: false,
    server: false,
    watch: false,
    $fetch: useApi(),
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
      options.body.value = payload.data
      res.execute()
    },
  }
}
