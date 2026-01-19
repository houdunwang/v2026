<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
import type { AuthLoginPost200Response } from "~/types/models/auth-login-post200-response";

const fields: AuthFormField[] = [
  {
    name: "name",
    type: "text",
    label: "帐号",
    placeholder: "请输入登录帐号",
    required: true,
    size: "xl",
    defaultValue: "houdunren",
  },
  {
    name: "password",
    label: "密码",
    type: "password",
    placeholder: "请输入登录密码",
    required: true,
    size: "xl",
    defaultValue: "admin888",
  },
  {
    name: "password_confirmation",
    label: "确认密码",
    type: "password",
    placeholder: "请输入登录密码",
    required: true,
    size: "xl",
    defaultValue: "admin888",
  },
];
const { login: onSuccess } = useAuth();
const formData = ref({
  name: "",
  password: "",
  password_confirmation: "",
});
const { pending, onSubmit } = useMutation<AuthLoginPost200Response>(
  "/auth/register",
  {
    body: formData,
    onSuccess,
  },
);
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md shadow-lg lg:mt-32">
      <UAuthForm
        title="注册"
        description="请输入登录帐号和密码"
        icon="i-lucide-user"
        :fields="fields"
        @submit="onSubmit"
        :submit="{
          label: '注册',
          size: 'xl',
        }"
      >
        <template #footer>
          如果你已有账号，请先
          <ULink to="#" class="text-primary font-medium">登录</ULink>.
          <ULink to="#" class="text-primary font-medium">首页</ULink>
        </template>
        <template #validation>
          <ValidateMessage />
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
