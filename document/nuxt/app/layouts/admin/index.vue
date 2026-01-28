<script setup lang="ts"></script>

<template>
  <UDashboardGroup>
    <AdminComponentsSidebar />
    <UDashboardPanel>
      <AdminComponentsNavbar />
      <div class="p-6">
        <slot />
      </div>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<style lang="scss" scoped></style>
