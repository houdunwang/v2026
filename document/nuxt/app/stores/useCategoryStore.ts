import { FetchKeyEnum } from "~/enum/fetchKey";
import type { CategoryGet200ResponseInner } from "~/types/models/category-get200-response-inner";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref<CategoryGet200ResponseInner[] | null | undefined>(
    null,
  );

  const getCategory = async () => {
    const { data } = await useQuery<CategoryGet200ResponseInner[]>(
      "/category",
      {
        key: FetchKeyEnum.category,
      },
    );
    categories.value = data.value;
  };

  const refresh = async () => {
    await refreshNuxtData(FetchKeyEnum.category);
    const { data } = useNuxtData(FetchKeyEnum.category);
    categories.value = data.value;
  };

  return { categories, getCategory, refresh };
});
