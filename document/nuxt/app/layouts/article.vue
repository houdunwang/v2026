<script setup lang="ts">
import ArticleCategoryMenu from "./components/ArticleCategoryMenu.vue";
</script>

<template>
  <div>
    <Header />
    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UPageAside>
              <ArticleCategoryMenu />
            </UPageAside>
          </template>
          <slot />
        </UPage>
      </UContainer>
    </UMain>
    <Footer />
  </div>
</template>

<style scoped></style>
