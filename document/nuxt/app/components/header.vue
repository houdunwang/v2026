<script setup lang="ts"></script>

<template>
  <UHeader>
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
