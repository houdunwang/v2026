<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "视频教程",
    to: "/",
    icon: "i-lucide-square-play",
  },
  {
    label: "晚八点直播",
    to: "/",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <UPageHero
    title="后盾人编程"
    description="后盾人编程是一个专注于全栈技术的编程课程，致力于帮助开发者提升编程技能，构建现代化的 Web 应用。"
    headline="New release"
    orientation="horizontal"
    :links="links"
  >
    <img
      src="/xj-big.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default h-72"
    />
  </UPageHero>
</template>
