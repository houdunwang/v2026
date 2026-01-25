<script setup lang="ts">
import type { MDCParserResult } from "@nuxtjs/mdc";
const ast = useState<MDCParserResult | undefined>("ast");
const emit = defineEmits<{
  select: [];
}>();
</script>

<template>
  <UContentToc
    :open="true"
    highlight
    highlight-color="neutral"
    color="neutral"
    :links="ast?.toc?.links"
  >
    <template #link="{ link }">
      <div @click="emit('select')">{{ link.text }}</div>
    </template>
  </UContentToc>
</template>
