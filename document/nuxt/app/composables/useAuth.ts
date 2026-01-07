export const useAuth = () => {
  const token = useCookie('token')
  const api = useApi()
  const login = (tokenString: string) => {
    token.value = tokenString
    navigateTo('/')
  }

  const isLogin = computed(() => !!token.value)

  const logout = async () => {
    await api('/auth/logout', {
      method: 'POST',
    })
    token.value = ''
  }

  return { login, isLogin, logout }
}
