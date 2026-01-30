<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import type { CategoryGet200ResponseInnerCategoriesInner } from "~/types/models/category-get200-response-inner-categories-inner";
const { refresh, categories } = useCategoryStore();
const props = defineProps<{
  button?: ButtonProps;
  category?: Partial<CategoryGet200ResponseInnerCategoriesInner>;
}>();
const defaultValue = {
  title: "",
  parentId: 0,
};
const state = ref<Partial<CategoryGet200ResponseInnerCategoriesInner>>(
  props.category || defaultValue,
);
const open = ref(false);
const url = state.value.id ? "/category/" + state.value.id : "/category";
const action = state.value.id ? "PUT" : "POST";
const { onSubmit } = useMutation(url, {
  body: state,
  method: action,
  onSuccess: () => {
    refresh();
    open.value = false;
  },
});
const items = computed(() => [
  { label: "一级栏目", value: 0 },
  ...(categories?.map((item) => ({
    label: item.title,
    value: item.id,
  })) || []),
]);
</script>

<template>
  <FormModal
    v-model="open"
    :title="props.category?.id ? '编辑栏目' : '添加栏目'"
    :button="props.button"
  >
    <UForm :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="栏目名称" name="title">
        <UInput v-model="state.title" class="w-full" />
        <FieldError name="title" />
      </UFormField>
      <UFormField label="栏目名称" name="title">
        <USelect v-model="state.parentId" :items="items!" class="w-full" />
        <FieldError name="parentId" />
      </UFormField>
      <UButton type="submit">保存提交</UButton>
    </UForm>
  </FormModal>
</template>
