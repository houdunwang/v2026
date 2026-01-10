import type { AuthLoginPost200ResponseUser } from '~/types/models/auth-login-post200-response-user'

export const useUserStore = defineStore('user', () => {
  const user = ref<AuthLoginPost200ResponseUser | undefined>()

  const setUser = (userData?: AuthLoginPost200ResponseUser) => {
    user.value = userData
  }

  return { user, setUser }
})
