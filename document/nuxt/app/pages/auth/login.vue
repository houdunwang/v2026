<script setup lang="ts">
  import * as z from 'zod'
  import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'
  import { useMutation } from '~/composables/useApi'

  const fields: AuthFormField[] = [
    {
      name: 'name',
      type: 'text',
      label: '帐号',
      placeholder: '请输入帐号',
      required: true,
      size: 'xl',
      defaultValue: 'admin1111111',
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

  // const schema = z.object({
  //   name: z.string('请输入帐号').min(3, '帐号不能少于3个字符'),
  //   password: z.string('请输入密码').min(8, '密码不能少于8个字符'),
  // })

  // type Schema = z.output<typeof schema>

  const formData = ref({ name: '', password: '' })
  const { data, onSubmit, pending } = useMutation('/auth/login', formData, {
    method: 'POST',
    onSuccess: (data) => {
      //处理登录后续逻辑
    },
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
            title="Error signing in"
          />
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
