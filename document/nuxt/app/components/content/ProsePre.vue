<script setup lang="ts">
import { codeToHtml } from "shiki";
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});
const html = await codeToHtml(props.code, {
  lang: "javascript",
  theme: "dracula",
});
</script>
<template>
  <div class="">
    <div
      class="bg-gray-900 text-gray-500 text-xs border-b border-gray-700 px-3 py-1 rounded-tl-md rounded-tr-md"
    >
      晚八点直播
    </div>
    <pre :class="$props.class" v-html="html"></pre>
  </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";
:deep(pre) {
  pre {
    @apply px-5 py-3 rounded-bl-md rounded-br-md overflow-x-auto;
  }
}
pre code .line {
  display: block;
}
</style>
