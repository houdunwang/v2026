<script setup lang="ts">
  const { isLogin, logout, user } = useAuth()
</script>

<template>
  <div>
    <UHeader>
      <template #left>
        <UIcon
          name="i-lucide-aperture"
          :size="30"
        />
        <div class="text-md mr-3 whitespace-nowrap">后盾人</div>
        <div class="flex gap-5">
          <HMenu />
          <HMenu />
          <HMenu />
          <HMenu />
          <HMenu />
          <HMenu />
          <HMenu />
        </div>
      </template>
      <template #right>
        <UColorModeButton />
        <div v-if="isLogin">
          <UButton
            variant="solid"
            @click="logout"
          >
            退出
          </UButton>
        </div>
        <div
          v-else
          class="flex gap-2"
        >
          <UButton
            variant="solid"
            to="/auth/login"
          >
            登录
          </UButton>
          <UButton variant="outline">注册</UButton>
        </div>
      </template>
    </UHeader>
  </div>
</template>

<style lang="scss" scoped></style>
