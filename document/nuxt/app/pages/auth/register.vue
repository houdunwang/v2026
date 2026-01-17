<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";

const toast = useToast();

const fields: AuthFormField[] = [
  {
    name: "email",
    type: "email",
    label: "帐号",
    placeholder: "请输入登录帐号",
    required: true,
    size: "xl",
  },
  {
    name: "password",
    label: "密码",
    type: "password",
    placeholder: "请输入登录密码",
    required: true,
    size: "xl",
  },
  {
    name: "password",
    label: "确认密码",
    type: "password_confirm",
    placeholder: "请输入登录密码",
    required: true,
    size: "xl",
  },
];

const schema = z.object({
  email: z.email("请输入正确的帐号"),
  password: z.string("请输入登录密码").min(8, "密码不能少于8个字符"),
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log("Submitted", payload);
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md shadow-lg lg:mt-32">
      <UAuthForm
        :schema="schema"
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
      </UAuthForm>
    </UPageCard>
  </div>
</template>
