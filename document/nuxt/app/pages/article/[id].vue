<script setup lang="ts">
import type { MDCParserResult } from "@nuxtjs/mdc";
import type { ArticleIdGet200Response } from "~/types/models/article-id-get200-response";

definePageMeta({
  layout: false,
  middleware: "auth",
});
const articleState = useState<ArticleIdGet200Response | undefined>(
  "article",
  () => undefined,
);
const astState = useState<MDCParserResult | undefined>("ast", () => undefined);
const route = useRoute();
const { data: article } = await useQuery<ArticleIdGet200Response>(
  `/article/${route.params.id}`,
);

const { data: ast } = await useAsyncData(`ast-${route.params.id}`, () =>
  parseMarkdown(article.value!.content),
);
articleState.value = article.value;
astState.value = ast.value;
</script>

<template>
  <NuxtLayout name="article">
    <div class="mt-12">
      <ContentRenderer v-if="ast" :value="ast" />
      <!-- <MDCRenderer :body="ast!.body" :data="ast!.body" /> -->
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
