import type { UseFetchOptions } from "#app";

export const useQuery = <T>(url: string, options: UseFetchOptions<T>) => {
  const { $api } = useNuxtApp();
  return useFetch<T>(url, {
    $fetch: $api,
    ...(options as any),
  });
};
