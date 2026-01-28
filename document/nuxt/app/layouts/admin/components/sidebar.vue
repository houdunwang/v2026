<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const items: NavigationMenuItem[] = [
  {
    label: "网站首页",
    icon: "i-lucide-house",
    to: "/",
    target: "_blank",
    // active: true,
  },
  {
    label: "栏目管理",
    icon: "i-lucide-inbox",
    to: "/category",
  },
  {
    label: "发布文章",
    icon: "i-lucide-users",
  },
];
</script>

<template>
  <UDashboardSidebar
    class="bg-elevated"
    collapsible
    :ui="{ footer: 'border-t border-default' }"
    :max-size="10"
    :default-size="10"
    :min-size="10"
  >
    <template #header="{ collapsed }">
      <div v-if="!collapsed" class="flex justify-between items-center w-full">
        <div class="font-normal ml-2 text-md text-muted">后盾人</div>
        <UDashboardSidebarCollapse />
      </div>
      <div v-else>
        <UDashboardSidebarCollapse />
      </div>
    </template>

    <template #default="{ collapsed }">
      <UNavigationMenu
        :collapsed="collapsed"
        :items="items"
        orientation="vertical"
      >
        <template #item="{ item }">
          <div class="group flex items-center gap-1 py-2">
            <UTooltip :text="item.label">
              <UIcon
                :name="item.icon"
                :size="20"
                class="group-hover:scale-125 duration-300"
              />
            </UTooltip>
            <div v-if="!collapsed">{{ item.label }}</div>
          </div>
        </template>
      </UNavigationMenu>
    </template>

    <template #footer="{ collapsed }">
      <AdminComponentsUserMenu :collapsed="collapsed" />
    </template>
  </UDashboardSidebar>
</template>
