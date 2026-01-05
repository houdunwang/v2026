<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'

  const items: NavigationMenuItem[] = [
    {
      label: 'adonis 编程',
      to: 'https://go.nuxt.com/figma-ui',
      target: '_blank',
    },
    {
      label: 'nuxt 开发',
      to: 'https://stackblitz.com/edit/nuxt-ui',
      target: '_blank',
    },
    {
      label: 'electron 实战',
      to: 'https://github.com/nuxt/ui/releases',
      target: '_blank',
    },
  ]
</script>

<template>
  <main>
    <USeparator icon="i-simple-icons-nuxtdotjs" />
    <UFooter>
      <template #left>
        <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
      </template>

      <UNavigationMenu
        :items="items"
        variant="link"
      />

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/x"
          target="_blank"
          aria-label="X"
        />
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
  </main>
</template>
