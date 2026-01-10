import type { AuthLoginPost200ResponseUser } from '~/types/models/auth-login-post200-response-user'

export const useAuth = () => {
  const token = useCookie('token')
  const userStore = useUserStore()
  const api = useApi()
  const { data: userData } = useQuery<AuthLoginPost200ResponseUser>('/user/info', {
    key: 'initUser',
    immediate: false,
  })
  const login = async (tokenString: string) => {
    token.value = tokenString
    await nextTick()
    initUser()
    navigateTo('/')
  }

  const isLogin = computed(() => !!token.value)

  const logout = async () => {
    await api('/auth/logout', {
      method: 'POST',
    })
    token.value = ''
    userStore.setUser(undefined)
  }

  const initUser = async () => {
    await refreshNuxtData('initUser')
    userStore.setUser(userData.value)
  }

  return { login, isLogin, logout, initUser, ...storeToRefs(userStore) }
}
