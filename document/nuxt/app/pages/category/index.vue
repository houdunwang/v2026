<script setup lang="ts">
import type { CategoryGet200ResponseInnerCategoriesInner } from "~/types/models/category-get200-response-inner-categories-inner";

definePageMeta({
  layout: "admin",
  middleware: "admin",
});
const categoryStore = useCategoryStore();
const delCategory = (
  category: Partial<CategoryGet200ResponseInnerCategoriesInner>,
) => {
  console.log("category", category);
  // categoryStore.delCategory(category.id);
};
</script>

<template>
  <div class="space-y-2">
    <CategoryComponentsForm :button="{ label: '添加栏目' }" />
    <div
      v-for="category in categoryStore.categories"
      :key="category.id"
      class="border border-default p-3 rounded-sm"
    >
      <h5 class="flex items-center group">
        <div class="ml-2 mr-2">
          {{ category.title }}
        </div>
        <div class="space-x-2 opacity-0 group-hover:opacity-100">
          <Confirm title="确认删除栏目吗？" @confirm="delCategory(category)">
            <UButton
              variant="subtle"
              size="xs"
              color="neutral"
              icon="i-lucide-trash-2"
              >删除</UButton
            >
          </Confirm>
          <CategoryComponentsForm
            title="编辑"
            :category="category"
            :button="{ label: '编辑', size: 'xs', icon: 'i-lucide-edit' }"
          />
        </div>
      </h5>
      <div class="grid lg:grid-cols-4 gap-2">
        <div
          v-for="item in category.categories"
          :key="item.id"
          class="border p-3 border-default rounded-sm hover:bg-accented duration-300"
        >
          <div class="grid grid-cols-[1fr_auto] gap-2">
            <div class="truncate">{{ item.title }}</div>
            <CategoryComponentsForm
              title="编辑"
              :category="item"
              :button="{ label: '编辑', size: 'xs', icon: 'i-lucide-edit' }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";
h5 {
  @apply mb-2;
  &::before {
    content: "";
    @apply w-1 h-5 bg-accented;
  }
}
</style>
