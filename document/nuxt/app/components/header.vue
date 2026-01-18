<script setup lang="ts">
const token = useCookie("token");
// const { data } = useNuxtData("categories");
// onMounted(() => {
//   setTimeout(() => {
//     data.value = "后盾人";
//   }, 2000);
// });
</script>

<template>
  <UHeader>
    <!-- {{ data }} -->
    {{ token }}
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2">
        <UIcon name="i-lucide-codepen" size="35" class="text-primary" />
        <div class="font-bold">后盾人编程</div>
      </NuxtLink>
    </template>
    <template #right>
      <UButton variant="solid" to="/auth/login">登录</UButton>
      <UButton variant="outline" to="/auth/register">注册</UButton>
    </template>
  </UHeader>
</template>

<style lang="scss" scoped></style>
