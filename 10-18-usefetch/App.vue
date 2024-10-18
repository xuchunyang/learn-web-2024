<script setup>
import { createFetch, useFetch } from "@vueuse/core";

// const url = "https://jxsonplaceholder.typicode.com/posts/0";
const url = "https://httpbin.org/delay/5";
const {
  isFetching,
  error,
  data,
  statusCode,
  isFinished,
  canAbort,
  abort,
  aborted,
} = useFetch(url, {
  async beforeFetch({ url, options, cancel }) {
    console.log("beforeFetch", { url, options, cancel });

    options.headers = {
      ...options.headers,
      "X-My-Header": "Hello",
    };

    return { url, options, cancel };
  },
  afterFetch(ctx) {
    console.log("afterFetch", ctx.data);

    return ctx;
  },
});

const useMyFetch = createFetch({
  baseUrl: "https://httpbin.org",
  options: {
    beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        "X-My-Header": "Hello",
      };

      return { options };
    },
  },
  fetchOptions: {
    headers: {
      "X-My-Header-v2": "Hello, Again!",
    },
  },
});

const {
  isFetching: isFetching2,
  error: error2,
  data: data2,
} = useMyFetch("/delay/3");
</script>

<template>
  <pre>{{ { isFetching2, error2, data2 } }}</pre>
  <pre>{{
    {
      isFetching,
      error,
      data,
      statusCode,
      isFinished,
      canAbort,
      abort,
      aborted,
    }
  }}</pre>

  <button @click="abort" :disabled="!(canAbort && !isFinished)">Abort</button>

  <div>
    <p v-if="isFetching">Fetching data...</p>
    <p v-else-if="error">{{ { error, statusCode, data } }}</p>
    <pre v-else>{{ data }}</pre>
  </div>
</template>
