<script setup lang="ts">
import type { ArticleIdGet200Response } from "~/types/models/article-id-get200-response";
definePageMeta({
  layout: false,
  middleware: "auth",
});
const toast = useToast();

const route = useRoute();
const { data: article } = await useQuery<ArticleIdGet200Response>(
  `/article/${route.params.id}`,
);
const { onSubmit } = useMutation(`/article/${route.params.id}`, {
  method: "PUT",
  onSuccess(data) {
    toast.add({
      title: "文章更新成功",
      duration: 1000,
    });
  },
});

defineShortcuts({
  meta_s: {
    handler: () => {
      onSubmit({ data: article.value! });
    },
    usingInput: true,
  },
});
</script>

<template>
  <div v-if="article?.content">
    <EditorExample v-model="article.content" content-type="markdown" />
  </div>
</template>

<style lang="scss" scoped></style>
