<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
const { user } = useAuth();
const props = defineProps<{
  collapsed?: boolean;
}>();
const items = ref<DropdownMenuItem[][]>([
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
  [
    {
      label: "Team",
      icon: "i-lucide-users",
    },
    {
      label: "Invite users",
      icon: "i-lucide-user-plus",
      children: [
        [
          {
            label: "Email",
            icon: "i-lucide-mail",
          },
          {
            label: "Message",
            icon: "i-lucide-message-square",
          },
        ],
        [
          {
            label: "More",
            icon: "i-lucide-circle-plus",
          },
        ],
      ],
    },
    {
      label: "New team",
      icon: "i-lucide-plus",
      kbds: ["meta", "n"],
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      to: "https://github.com/nuxt/ui",
      target: "_blank",
    },
    {
      label: "Support",
      icon: "i-lucide-life-buoy",
      to: "/docs/components/dropdown-menu",
    },
    {
      label: "API",
      icon: "i-lucide-cloud",
      disabled: true,
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      kbds: ["shift", "meta", "q"],
    },
  ],
]);
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton
      icon="i-lucide-text-align-justify"
      :label="props.collapsed ? undefined : user?.name"
      color="neutral"
      variant="ghost"
      class="w-full"
      :block="props.collapsed"
    />
  </UDropdownMenu>
</template>
