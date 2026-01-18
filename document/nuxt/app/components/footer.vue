<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "视频教程",
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: "软件开发",
    to: "https://stackblitz.com/edit/nuxt-ui",
    target: "_blank",
  },
];
</script>

<template>
  <div>
    <USeparator icon="i-lucide-siren" />
    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </div>
</template>
