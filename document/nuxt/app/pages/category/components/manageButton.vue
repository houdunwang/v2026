<script setup lang="ts">
import type { CategoryGet200ResponseInnerCategoriesInner } from "~/types/models/category-get200-response-inner-categories-inner";
const categoryStore = useCategoryStore();
const delCategory = async (
  category: Partial<CategoryGet200ResponseInnerCategoriesInner>,
) => {
  await useApi()("/category/" + category.id, {
    method: "DELETE",
  });
  categoryStore.refresh();
};
const props = defineProps<{
  category: Partial<CategoryGet200ResponseInnerCategoriesInner>;
}>();
</script>

<template>
  <div class="space-x-2">
    <Confirm title="确认删除栏目吗？" @confirm="delCategory(category)">
      <UButton
        variant="subtle"
        size="xs"
        color="neutral"
        icon="i-lucide-trash-2"
      >
        删除
      </UButton>
    </Confirm>
    <CategoryComponentsForm
      title="编辑"
      :category="category"
      :button="{ label: '编辑', size: 'xs', icon: 'i-lucide-edit' }"
    />
  </div>
</template>

<style lang="scss" scoped></style>
