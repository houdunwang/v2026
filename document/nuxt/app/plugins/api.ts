import { httpError } from "~/config/httpError";
import { useValidateStore } from "./../stores/useValidateStore";
export default defineNuxtPlugin({
  name: "api",
  setup(nuxtApp) {
    const toast = useToast();
    const validateStore = useValidateStore();
    const $api = $fetch.create({
      baseURL: "http://localhost:3333",
      headers: {
        Accept: "application/json",
        // "Content-Type": "application/json",
      },
      onRequest({ request, options }) {
        options.headers.set(
          "Authorization",
          `Bearer ${useCookie("token").value}`,
        );
        validateStore.resetError();
        //设置token
      },
      onRequestError() {
        // toast.add({
        //   title: "网络连接失败",
        // });
        // console.log("请求发生错误");
      },
      onResponse(res) {
        if (res.response.ok) {
        }
      },
      onResponseError({ response }) {
        const { status, statusText } = response;
        if (import.meta.server || ![422].includes(status || 500)) {
          nuxtApp.runWithContext(() => {
            showError({
              statusCode: status || 500,
              statusMessage:
                httpError[status as keyof typeof httpError] ||
                statusText ||
                "服务器错误",
            });
          });
          return;
        }

        switch (response.status) {
          case 422:
            const errors = response._data?.errors as {
              field: string;
              message: string;
            }[];
            errors.forEach((item) => {
              validateStore.setError(item.field, item.message);
            });
            break;
        }
      },
    });
    return {
      provide: {
        api: $api,
      },
    };
  },
});
