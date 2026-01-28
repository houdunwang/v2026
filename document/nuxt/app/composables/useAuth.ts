import type { AuthLoginPost200Response } from "~/types/models/auth-login-post200-response";

export const useAuth = () => {
  const userStore = useUserStore();
  const redirectState = useState(RedirectHistory.REDIRECT_HISTORY);

  const token = useCookie("token", {
    maxAge: 60 * 60 * 24 * 7,
  });

  const login = async (data: AuthLoginPost200Response) => {
    token.value = data.token.token;
    await nextTick();
    await userStore.refreshUser();
    navigateTo(redirectState.value || "/");
  };

  const logout = () => {
    token.value = null;
    userStore.setUser(undefined);
  };

  const isLogin = computed(() => {
    return !!userStore.user;
  });

  return { login, logout, isLogin, ...storeToRefs(userStore) };
};
