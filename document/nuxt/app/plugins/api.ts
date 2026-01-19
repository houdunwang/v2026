import { useValidateStore } from "./../stores/useValidateStore";
export default defineNuxtPlugin({
  name: "api",
  setup(nuxtApp) {
    const toast = useToast();
    const validateStore = useValidateStore();
    const $api = $fetch.create({
      baseURL: "http://localhost:3333",
      headers: {
        "Content-Type": "application/json",
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
          console.log("操作成功");
        }
        // console.log("onResponse", res);
        // console.log("ddd");
      },
      onResponseError({ response }) {
        switch (response.status) {
          case 422:
            const errors = response._data?.errors as {
              field: string;
              message: string;
            }[];
            errors.forEach((item) => {
              validateStore.setError(item.field, item.message);
            });

            console.log("errors", errors);

            break;
        }
        console.log("onResponseError", response);
      },
    });
    return {
      provide: {
        api: $api,
      },
    };
  },
});
