export default defineNuxtPlugin({
  name: "userInfo",
  dependsOn: ["api"],
  async setup(nuxtApp) {
    await Promise.all([
      useUserStore().getUser(),
      useCategoryStore().getCategory(),
    ]);
  },
});
