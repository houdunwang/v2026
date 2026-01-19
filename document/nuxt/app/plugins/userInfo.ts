export default defineNuxtPlugin({
  name: "userInfo",
  dependsOn: ["api"],
  async setup(nuxtApp) {
    const userStore = useUserStore();
    userStore.getUser();
  },
});
