<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import type { CategoryGet200ResponseInnerCategoriesInner } from "~/types/models/category-get200-response-inner-categories-inner";
const { refresh } = useCategoryStore();
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
      <UButton type="submit">保存提交</UButton>
    </UForm>
  </FormModal>
</template>

<style lang="scss" scoped></style>
