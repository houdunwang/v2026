<script setup lang="ts">
  const features = ref([
    {
      title: '持续集成',
      description: '随着视频的不断更新，文档也在不断丰富，观看视频时对照文档学习效果更好。',
      icon: 'i-lucide-smile',
      to: '/',
    },
    {
      title: '内容丰富',
      description: '大部分视频课程都提供了文档，文档内容精炼，摒弃掉啰嗦无用内容。',
      icon: 'i-lucide-a-large-small',
      to: '/',
    },
    {
      title: '在线直播',
      description: '大叔晚上8点会直播写代码，进行项目开发，欢迎大家来到直播间，一起交流学习',
      icon: 'i-lucide-sun-moon',
      to: '/',
    },
  ])
</script>

<template>
  <UPageSection
    :features="features"
    :ui="{
      features: 'features',
      container: 'lg:pt-0',
    }"
  />
</template>

<style>
  @reference "~/assets/css/main.css";

  :deep(.features) {
    @apply [&_li]:light:bg-gray-100 [&_li]:dark:bg-gray-800 [&_li]:px-3 [&_li]:py-5 [&_li]:rounded-lg;
  }
</style>
