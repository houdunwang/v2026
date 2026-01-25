<script setup lang="ts"></script>

<template>
  <div>
    <Header />
    <ArticleComponentsMobileHeader />
    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UPageAside>
              <ArticleComponentsArticleList />
            </UPageAside>
          </template>

          <slot />
          <template #right>
            <div class="hidden lg:block">
              <ArticleComponentsToc />
            </div>
          </template>
        </UPage>
      </UContainer>
    </UMain>
    <Footer />
  </div>
</template>

<style scoped></style>
