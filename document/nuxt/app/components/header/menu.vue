<script setup lang="ts">
import type { CategoryGet200ResponseInner } from "~/types/models/category-get200-response-inner";

const props = defineProps<{
  category: CategoryGet200ResponseInner;
}>();
const items = ref([
  ...props.category.categories.map((category) => {
    return [
      {
        label: category.title,
        icon: "i-lucide-folder",
      },
      ...category.articles.map((article) => ({
        label: article.title,
        icon: "i-lucide-file-text",
        onSelect: () => {
          navigateTo({ name: "article-id", params: { id: article.id } });
        },
      })),
    ];
  }),
]);
const open = ref(false);
</script>

<template>
  <UDropdownMenu
    :items="items"
    class="mx-2"
    :modal="false"
    v-model:open="open"
    :ui="{
      content: 'max-h-[calc(100vh-100px)] overflow-y-auto',
    }"
  >
    <UButton
      color="neutral"
      variant="link"
      :label="category.title"
      :ui="{
        label: 'whitespace-nowrap max-w-20',
      }"
    >
      <!-- <div class=""></div> -->
      <template #trailing>
        <UIcon
          name="i-lucide-chevron-down"
          size="12"
          :class="[{ 'rotate-180': open }, 'duration-300']"
        />
      </template>
    </UButton>
  </UDropdownMenu>
</template>
