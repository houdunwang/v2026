export default defineNuxtRouteMiddleware((to, from) => {
  const { isLogin } = useAuth();
  const redirectState = useState(RedirectHistory.REDIRECT_HISTORY);
  if (!isLogin.value) {
    redirectState.value = to.fullPath;
    return navigateTo("/auth/login");
  }
});
