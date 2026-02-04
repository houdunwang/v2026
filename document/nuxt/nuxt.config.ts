// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@nuxt/content",
    "@nuxtjs/mdc",
  ],
  imports: {
    dirs: ["~/enum"],
  },
  vite: {
    optimizeDeps: {
      include: [
        "@nuxt/ui > prosemirror-state",
        "@nuxt/ui > prosemirror-transform",
        "@nuxt/ui > prosemirror-model",
        "@nuxt/ui > prosemirror-view",
        "@nuxt/ui > prosemirror-gapcursor",
      ],
    },
  },
  // experimental: {
  //   asyncContext: true,
  // },
  fonts: {
    provider: "local",
  },
  components: [
    { path: "~/components", pattern: "**/*.vue", pathPrefix: true },
    { path: "~/layouts", pattern: "**/components/*.vue", pathPrefix: true },
    { path: "~/pages", pattern: "**/components/**/*.vue", pathPrefix: true },
  ],
  pages: {
    pattern: ["**/*.vue", "!**/components/**"],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: 'https://font.webcache.cn/google/css2?family=Liu+Jian+Mao+Cao&family=Public+Sans:ital,wght@0,100..900;1,100..900&family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet',
        },
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
