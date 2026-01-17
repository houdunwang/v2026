<script setup lang="ts">
const features = ref([
  {
    title: "Icons",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
  },
  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
  },
]);
</script>

<template>
  <UPageSection :features="features" />
</template>
<style scoped>
@reference "~/assets/css/main.css";
:deep([data-slot="container"]) {
  @apply lg:pt-0;
}
:deep([data-slot="features"]) {
  li {
    @apply bg-gray-100 px-5 py-3 rounded-lg;
  }
}
</style>
