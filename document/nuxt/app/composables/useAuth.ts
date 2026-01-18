import type { AuthLoginPost200Response } from "~/types/models/auth-login-post200-response";

export const useAuth = () => {
  const token = useCookie("token", {
    maxAge: 60 * 60 * 24 * 7,
  });

  const login = (data: AuthLoginPost200Response) => {
    token.value = data.token.token;
  };

  const logout = () => {
    // token.value = "";
  };

  const isLogin = computed(() => {
    // return token.value !== "";
  });
  return { login, logout, isLogin };
};
