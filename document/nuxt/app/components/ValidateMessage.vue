<script setup lang="ts">
const validateStore = useValidateStore();
</script>

<template>
  <UAlert
    color="error"
    icon="i-lucide-info"
    v-if="Object.keys(validateStore.errors).length > 0"
  >
    <template #description>
      <div v-for="(error, field) in validateStore.errors" :key="field">
        {{ error }}
      </div>
    </template>
  </UAlert>
</template>

<style lang="scss" scoped></style>
