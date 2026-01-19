<script setup lang="ts"></script>

<template>
  <UApp
    :toaster="{
      position: 'top-center',
      expand: false,
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style lang="scss" scoped></style>
