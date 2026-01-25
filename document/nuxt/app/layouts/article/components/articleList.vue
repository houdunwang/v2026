<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import type { ArticleIdGet200Response } from "~/types/models/article-id-get200-response";
const articleState = useState<ArticleIdGet200Response>("article");
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: articleState.value.category.title,
      icon: "i-lucide-book-open",
      open: true,
      children: articleState.value.category.articles.map((article) => ({
        label: article.title,
        // icon: "i-lucide-house",
        to: `/article/${article.id}`,
      })),
      //   {
      //     label: "Introduction",
      //     description: "Fully styled and customizable components for Nuxt.",
      //     icon: "i-lucide-house",
      //   },
      // ],
    },
  ],
]);
</script>

<template>
  <div class="">
    <UNavigationMenu orientation="vertical" :items="items" class="" />
  </div>
</template>
