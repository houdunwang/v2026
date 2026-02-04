<script setup lang="ts">
import type { ArticleIdGet200Response } from "~/types/models/article-id-get200-response";

const { isAdmin } = useAuth();
const categoryStore = useCategoryStore();
const open = ref(false);
const state = ref({
  title: "",
  categoryId: undefined,
});
const { onSubmit } = useMutation<ArticleIdGet200Response>(`/article`, {
  method: "POST",
  onSuccess: (data) => {
    open.value = false;
    navigateTo(`/article/edit/${data.id}`);
  },
});
const selectItems = computed(() => {
  const categories = categoryStore.categories || [];
  return categories.map((category) => [
    {
      label: category.title,
      value: category.id,
      disable: true,
    },
    ...category.categories.map((item) => ({
      label: item.title,
      value: item.id,
    })),
  ]);
});
</script>

<template>
  <FormModal title="发表文章" v-if="isAdmin" v-model:open="open">
    <template #button>
      <UButton label="发表" variant="solid" color="primary" />
    </template>
    <UForm :state="state" class="space-y-3" @submit="onSubmit">
      <UFormField label="文章标题">
        <UInput v-model="state.title" class="w-full" />
        <FieldError name="title" />
      </UFormField>
      <UFormField label="所属栏目">
        <USelect
          placeholder="请选择所属栏目"
          :items="selectItems"
          v-model="state.categoryId"
          class="w-full"
        />
        <FieldError name="categoryId" />
      </UFormField>
      <UButton type="submit">发表</UButton>
    </UForm>
  </FormModal>
</template>

<style lang="scss" scoped></style>
