<script setup lang="ts">
const articleListDrawerOpen = ref(false);
const tocDrawerOpen = ref(false);
</script>

<template>
  <div
    class="flex justify-between lg:hidden border-b border-default z-10 py-3 px-2 sticky bg-default top-[var(--ui-header-height)]"
  >
    <UDrawer direction="left" :model="false" :open="articleListDrawerOpen">
      <UButton
        icon="i-lucide-text-align-start"
        color="neutral"
        variant="link"
        @click="articleListDrawerOpen = true"
      />

      <template #body>
        <ArticleComponentsArticleList />
      </template>
    </UDrawer>
    <UDrawer
      direction="right"
      :handle="false"
      :model="false"
      :open="tocDrawerOpen"
    >
      <UButton
        label="文章目录"
        color="neutral"
        variant="link"
        @click="tocDrawerOpen = true"
      />

      <template #body>
        <div class="w-[calc(100vw*.7)]">
          <ArticleComponentsToc @select="() => (tocDrawerOpen = false)" />
        </div>
      </template>
    </UDrawer>
  </div>
</template>

<style lang="scss" scoped></style>
