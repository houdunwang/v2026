import type { UseFetchOptions } from "#app";

export const useMutation = <T>(
  url: string,
  options: UseFetchOptions<T> & {
    body: Ref<any>;
    onSuccess: (data: T) => void;
  },
) => {
  const { $api } = useNuxtApp();
  const fetch = useFetch<T>(url, {
    method: "POST",
    immediate: false,
    server: false,
    $fetch: $api,
    ...(options as any),
    onResponse(res) {
      if (res.response.ok) {
        options.onSuccess(res.response._data as T);
      }
    },
  });
  const onSubmit = async (payload: any) => {
    options.body.value = payload.data;
    await fetch.execute();
  };
  return { ...fetch, onSubmit };
};
