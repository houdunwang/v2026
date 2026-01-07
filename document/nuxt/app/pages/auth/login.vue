<script setup lang="ts">
  import type { AuthFormField } from '@nuxt/ui'
  definePageMeta({
    middleware: ['guest'],
  })
  const validateStore = useValidateStore()
  const fields: AuthFormField[] = [
    {
      name: 'name',
      type: 'text',
      label: '帐号',
      placeholder: '请输入帐号',
      required: true,
      size: 'xl',
      defaultValue: 'admin',
    },
    {
      name: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入登录密码',
      required: true,
      size: 'xl',
      defaultValue: 'admin888',
    },
  ]

  const formData = ref({ name: '', password: '' })
  const { login } = useAuth()
  const { data, onSubmit, pending } = useMutation<{ token: { token: string } }>('/auth/login', {
    method: 'POST',
    body: formData,
    onSuccess: (data) => login(data.token.token),
  })
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 mt-32">
    <UPageCard class="w-full max-w-md shadow-xl">
      <UAuthForm
        title="登录"
        description="请输入帐号和密码"
        icon="i-lucide-user"
        :fields="fields"
        @submit="onSubmit"
        :submit="{
          label: '登录',
          size: 'xl',
          loading: pending,
        }"
      >
        <template #footer>
          如果没有帐号？
          <ULink
            to="/auth/register"
            class="text-primary"
          >
            注册
          </ULink>
          <ULink
            to="/"
            class="text-primary"
          >
            首页
          </ULink>
        </template>
        <template #validation>
          <UAlert
            color="error"
            icon="i-lucide-info"
            v-if="validateStore.errors.length > 0"
          >
            <template #description>
              <div
                v-for="error in validateStore.errors"
                :key="error.name"
              >
                {{ error.message }}
              </div>
            </template>
          </UAlert>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
