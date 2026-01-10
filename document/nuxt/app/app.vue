<script setup lang="ts">
  const { initUser } = useAuth()
  await initUser()
</script>

<template>
  <UApp :toaster="{ position: 'top-right', expand: false, duration: 3000 }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style></style>
