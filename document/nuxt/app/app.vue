<script setup lang="ts">
// const {
//   data: categories,
//   execute,
//   pending,
//   error,
// } = await useAsyncData(async () =>
//   $fetch("http://localhost:3333/category", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }),
// );
// const { data: categories } = await useFetch("http://localhost:3333/category", {
//   key: "categories",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
</script>

<template>
  <UApp
    :toaster="{
      position: 'top-center',
      expand: false,
    }"
  >
    <!-- {{ categories }} -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style lang="scss" scoped></style>
