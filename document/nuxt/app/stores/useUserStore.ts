import { FetchKeyEnum } from "~/enum/fetchKey";
import type { AuthLoginPost200ResponseUser } from "~/types/models/auth-login-post200-response-user";

export const useUserStore = defineStore("user", () => {
  const user = ref<AuthLoginPost200ResponseUser | null | undefined>(null);

  const getUser = async () => {
    const { data } = await useQuery<AuthLoginPost200ResponseUser>(
      "/user/info",
      {
        key: FetchKeyEnum.userInfo,
      },
    );
    user.value = data.value;
  };

  const refreshUser = async () => {
    await refreshNuxtData(FetchKeyEnum.userInfo);
    const { data } = useNuxtData(FetchKeyEnum.userInfo);
    user.value = data.value;
  };
  const setUser = (data?: AuthLoginPost200ResponseUser) => {
    user.value = data;
  };

  return { user, getUser, setUser, refreshUser };
});
