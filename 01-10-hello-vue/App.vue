<script setup>
import Counter from "./Counter.vue";
import Tasks from "./Tasks.vue";
import HelloForm from "./HelloForm.vue";
</script>

<template>
  <h1>Hello, Vue! Again!</h1>
  <p>
    可以愉快地使用 Vite 构建 MPA 了，单独的页面还可以使用
    Vue，共享依赖不完美，但是练习用途没关系。
  </p>
  <div class="counters">
    <Counter />
    <Counter />
    <Counter />
  </div>
  <Tasks />

  <HelloForm />
</template>

<style scoped>
.counters {
  display: flex;
  gap: 1rem;
}
</style>
