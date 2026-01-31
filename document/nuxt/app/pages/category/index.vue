<script setup lang="ts">
import draggable from "vuedraggable";
definePageMeta({
  layout: "admin",
  middleware: "admin",
});
const categoryStore = useCategoryStore();
const categories = ref(categoryStore.categories || []);
const dragEnd = async () => {
  await useApi()("/category/sort", {
    method: "POST",
    body: {
      categories: categories.value,
    },
  });

  categoryStore.refresh();
};
</script>

<template>
  <div class="space-y-2">
    <CategoryComponentsForm :button="{ label: '添加栏目' }" />
    <draggable
      v-model="categories"
      @end="dragEnd"
      item-key="id"
      class="space-y-3"
    >
      <template #item="{ element: category }">
        <div class="border border-default p-3 rounded-sm bg-default">
          <h5 class="flex items-center group">
            <div class="flex justify-between flex-1 pr-3">
              <div class="ml-2 mr-2">
                {{ category.title }}
              </div>
              <CategoryComponentsManageButton :category="category" />
            </div>
          </h5>
          <draggable
            v-model="category.categories"
            @end="dragEnd"
            item-key="id"
            class="space-y-3"
          >
            <template #item="{ element: item }">
              <div
                class="border p-3 border-default rounded-sm hover:bg-accented duration-300"
              >
                <div class="grid grid-cols-[1fr_auto] gap-2">
                  <div class="truncate">{{ item.title }}</div>
                  <CategoryComponentsManageButton :category="item" />
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </template>
    </draggable>
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
