<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import type { CategoryGet200ResponseInnerCategoriesInner } from "~/types/models/category-get200-response-inner-categories-inner";

const props = defineProps<{
  title?: string;
  button?: ButtonProps;
}>();

defineSlots<{
  default: () => void;
  button: () => void;
}>();
const open = defineModel<boolean>();
</script>

<template>
  <UModal v-model:open="open" :dismissible="false">
    <slot name="button">
      <UButton
        v-bind="props.button"
        :variant="props.button?.variant || 'subtle'"
        :label="props.button?.label || '添加栏目'"
        icon="i-lucide-plus"
        :color="props.button?.color || 'neutral'"
      />
    </slot>
    <template #title>
      {{ title }}
    </template>
    <template #body> <slot /> </template>
  </UModal>
</template>
