<script setup lang="ts"></script>

<template>
  <UDashboardGroup>
    <AdminComponentsSidebar />
    <UDashboardPanel>
      <AdminComponentsNavbar />
      <div class="p-6 overflow-y-auto">
        <slot />
      </div>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<style lang="scss" scoped></style>
