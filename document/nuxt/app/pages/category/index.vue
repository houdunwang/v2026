<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "admin",
});
const categoryStore = useCategoryStore();
</script>

<template>
  <div class="space-y-2">
    <CategoryComponentsForm :button="{ label: '添加栏目' }" />
    <UCard v-for="category in categoryStore.categories" :key="category.id">
      <template #header>
        <div class="flex justify-between items-center">
          {{ category.title }}
          <CategoryComponentsForm
            title="编辑"
            :category="category"
            :button="{ label: '编辑', size: 'xs', icon: 'i-lucide-edit' }"
          />
        </div>
      </template>
      <div class="grid grid-cols-4 gap-2">
        <UCard v-for="item in category.categories" :key="item.id">
          <template #header>
            <div class="grid grid-cols-[1fr_auto] gap-2">
              <div class="truncate">{{ item.title }}</div>
              <CategoryComponentsForm
                title="编辑"
                :category="item"
                :button="{ label: '编辑', size: 'xs', icon: 'i-lucide-edit' }"
              />
            </div>
          </template>
        </UCard>
      </div>
    </UCard>
  </div>
</template>

<style lang="scss" scoped></style>
