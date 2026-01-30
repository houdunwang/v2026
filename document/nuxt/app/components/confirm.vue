<script setup lang="ts">
const { title } = defineProps<{
  title: string;
}>();
const emit = defineEmits<{
  confirm: [];
}>();
const open = ref(false);
const handleConfirm = () => {
  open.value = false;
  emit("confirm");
};
</script>

<template>
  <UModal v-model:open="open">
    <template #title> {{ title }} </template>
    <slot />
    <template #footer>
      <UButton variant="subtle" color="neutral" @click="open = false"
        >取消</UButton
      >
      <UButton color="primary" @click="handleConfirm">确认</UButton>
    </template>
  </UModal>
</template>

<style lang="scss" scoped></style>
