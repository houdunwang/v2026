<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
import { useMutation } from "~/composables/useMutation";
import type { AuthLoginPost200Response } from "~/types/models/auth-login-post200-response";
import { useAuth } from "~/composables/useAuth";
definePageMeta({
  middleware: "guest",
});
const fields: AuthFormField[] = [
  {
    name: "name",
    type: "text",
    label: "帐号",
    placeholder: "请输入登录帐号",
    required: true,
    size: "xl",
    defaultValue: "admin",
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
];

// const schema = z.object({
//   name: z.string("请输入正确的帐号").min(3, "帐号不能少于3个字符"),
//   password: z.string("请输入登录密码").min(5, "密码不能少于8个字符"),
// });

// type Schema = z.output<typeof schema>;
const { login: onSuccess } = useAuth();
const formData = ref({
  name: "",
  password: "",
});
const { pending, onSubmit } = useMutation<AuthLoginPost200Response>(
  "/auth/login",
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
        title="登录"
        description="请输入登录帐号和密码"
        icon="i-lucide-user"
        :fields="fields"
        @submit="onSubmit"
        :loading="pending"
        :submit="{
          label: '登录',
          size: 'xl',
        }"
      >
        <template #footer>
          如果您还没有账号，请先
          <ULink to="#" class="text-primary font-medium">注册</ULink>.
          <ULink to="#" class="text-primary font-medium">首页</ULink>
        </template>
        <template #validation>
          <ValidateMessage />
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
