import type { UseFetchOptions } from '#app'

interface IOPtions<T> extends UseFetchOptions<T> {
  onSuccess?: (data: T) => void
}
export const useQuery = <T>(url: string, options: IOPtions<T> = {}) => {
  return useFetch(url, {
    ...options,
    $fetch: useApi(),
    method: 'GET',
    onResponse(res) {
      if (options.onSuccess) {
        options.onSuccess(res.response._data as T)
      }
      return res.response._data as T
    },
  })
}
