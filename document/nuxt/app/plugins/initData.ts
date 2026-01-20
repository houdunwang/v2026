export default defineNuxtPlugin({
  name: "userInfo",
  dependsOn: ["api"],
  async setup(nuxtApp) {
    useUserStore().getUser();
    useCategoryStore().getCategory();
  },
});
