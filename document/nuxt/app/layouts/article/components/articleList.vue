<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import type { ArticleIdGet200Response } from "~/types/models/article-id-get200-response";
const articleState = useState<ArticleIdGet200Response>("article");
defineEmits<{
  select: [];
}>();
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: articleState.value.category.title,
      icon: "i-lucide-book-open",
      open: true,
      children: articleState.value.category.articles.map((article) => ({
        label: article.title,
        to: `/article/${article.id}`,
      })),
    },
  ],
]);
</script>

<template>
  <div class="">
    <UNavigationMenu orientation="vertical" :items="items">
      <template #item-label="{ item }">
        <div class="w-full">
          <div @click="$emit('select')" class="truncate">{{ item.label }}</div>
        </div>
      </template>
    </UNavigationMenu>
  </div>
</template>
