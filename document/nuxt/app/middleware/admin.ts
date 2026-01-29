import auth from "./auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAdmin } = useAuth();
  const res = auth(to, from);
  if (res) return res;
  if (!isAdmin.value) return navigateTo("/");
});
