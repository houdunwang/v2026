<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const categoryStore = useCategoryStore();
const { isMobile = false } = defineProps<{
  isMobile?: boolean;
}>();
const items = ref<NavigationMenuItem[]>(
  categoryStore.categories!.map((category) => ({
    label: category.title,
    open: isMobile,
    // to: `/`,
    children: category.categories?.map((item) => ({
      label: item.title,
      // description: "Fully styled and customizable components for N",
      icon: "i-lucide-house",
      to: `/article/${item.articles[0]!.id}`,
    })),
  })),
);
</script>

<template>
  <div>
    <UNavigationMenu
      :items="items"
      :orientation="isMobile ? 'vertical' : 'horizontal'"
      :disable-hover-trigger="true"
      :ui="{
        item: isMobile ? undefined : 'truncate max-w-32 mx-2',
      }"
    />
  </div>
</template>
