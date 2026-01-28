<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const { user, logout } = useAuth();
const items = ref<DropdownMenuItem[]>([
  [
    {
      label: "内容管理",
      icon: "i-lucide-user",
    },
    {
      label: "退出登录",
      icon: "i-lucide-credit-card",
      onSelect: () => {
        logout();
      },
    },
  ],
]);
</script>

<template>
  <UHeader
    class="border-none pt-6 h-auto"
    :ui="{
      container:
        'border border-default rounded-xl shadow-lg py-2 w-[calc(100%*.7)] hover:shadow-2xl duration-1000',
    }"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2">
        <UIcon name="i-lucide-codepen" size="35" class="text-primary" />
        <div class="font-bold">后盾人编程</div>
      </NuxtLink>
    </template>
    <HeaderMenu />
    <template #body>
      <HeaderMenu :is-mobile="true" />
    </template>
    <template #right>
      <UColorModeSwitch />
      <template v-if="user">
        <UDropdownMenu :items="items">
          <UButton variant="outline" to="/">{{ user.name }}</UButton>
        </UDropdownMenu>
      </template>
      <template v-else>
        <UButton variant="solid" to="/auth/login">登录</UButton>
        <UButton variant="outline" to="/auth/register">注册</UButton>
      </template>
    </template>
  </UHeader>
</template>

<style lang="scss" scoped></style>
