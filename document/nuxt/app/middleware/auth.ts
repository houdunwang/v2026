export default defineNuxtRouteMiddleware((to, from) => {
  const { isLogin } = useAuth();
  if (!isLogin.value) return navigateTo("/auth/login");
});
