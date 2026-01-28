<script setup lang="ts">
const props = defineProps<{
  error: any;
}>();
</script>

<template>
  <UError
    :error="{
      statusCode: props.error.statusCode,
      statusMessage: props.error.statusMessage,
      message: '你也可以联系管理员',
    }"
    :clear="{
      label: '返回首页',
      to: '/',
    }"
  />
</template>
