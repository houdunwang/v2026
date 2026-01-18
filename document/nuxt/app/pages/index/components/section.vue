<script setup lang="ts">
const features = ref([
  {
    title: "持续集成",
    description:
      "随着视频的不断更新，文档也在不断丰富，观看视频时对照文档学习效果更好。",
    icon: "i-lucide-smile",
    to: "/",
  },
  {
    title: "内容丰富",
    description:
      "大部分视频课程都提供了文档，文档内容精炼，摒弃掉啰嗦无用内容。",
    icon: "i-lucide-a-large-small",
    to: "/",
  },
  {
    title: "在线直播",
    description: "大叔晚上8点直播，我们一起写代码，交流讨论。",
    icon: "i-lucide-sun-moon",
    to: "/",
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
