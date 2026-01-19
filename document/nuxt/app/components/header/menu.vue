<script setup lang="ts">
const items = ref([
  [
    {
      label: "Benjamin",
      avatar: {
        src: "https://github.com/benjamincanac.png",
      },
      type: "label",
    },
  ],
  [
    {
      label: "Profile",
      icon: "i-lucide-user",
    },
    {
      label: "Billing",
      icon: "i-lucide-credit-card",
    },
    {
      label: "Settings",
      icon: "i-lucide-cog",
      kbds: [","],
    },
    {
      label: "Keyboard shortcuts",
      icon: "i-lucide-monitor",
    },
  ],
]);
const open = ref(false);
</script>

<template>
  <UDropdownMenu :items="items" class="mx-2" :modal="false" v-model:open="open">
    <UButton color="neutral" variant="link" label="前端开发">
      <template #trailing>
        <UIcon
          name="i-lucide-chevron-down"
          size="12"
          :class="[{ 'rotate-180': open }, 'duration-300']"
        />
      </template>
    </UButton>
  </UDropdownMenu>
</template>
