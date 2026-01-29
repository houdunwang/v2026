<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
const validateStore = useValidateStore();
const error = computed(() => validateStore.get(props.name));
</script>

<template>
  <div>
    {{ error }}
  </div>
</template>

<style lang="scss" scoped></style>
