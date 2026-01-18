export default defineNuxtPlugin((nuxtApp) => {
  const toast = useToast();
  const $api = $fetch.create({
    baseURL: "http://localhost:3333",
    headers: {
      "Content-Type": "application/json",
    },
    onRequest({ request, options }) {
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
      console.log("onResponse", res);
      // console.log("ddd");
    },
    onResponseError(err) {
      console.log("onResponseError", err);
    },
  });
  return {
    provide: {
      api: $api,
    },
  };
});
