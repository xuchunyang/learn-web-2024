<script setup>
// https://web.dev/articles/building/a-dialog-component
// 给 Dialog 添加动画，并不容易

import { ref } from "vue";
import { Close } from "@element-plus/icons-vue";

const nativeDialog = ref(null);
</script>

<template>
  <el-button @click="nativeDialog.showModal()">Show dialog</el-button>
  <dialog ref="nativeDialog">
    <h1>Dialog</h1>
    <p>Dialog content</p>
    <el-button :icon="Close" @click="nativeDialog.close()" autofocus
      >Close</el-button
    >
  </dialog>
</template>

<style scoped>
dialog {
  min-width: 500px;
  border: 1px solid #ccc;
  border-radius: 10px;
  opacity: 0;
  transform: scale(0);
  animation: dialogClose 0.3s ease forwards;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
}

dialog[open] {
  opacity: 1;
  transform: scale(1);
  animation: dialogOpen 0.3s ease forwards;
}

@keyframes dialogOpen {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes dialogClose {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
</style>

<style>
body {
  margin: 0;
}

#app {
  height: 100%;
  /* Add a colorful and fun bg linear grad */
  background-image: linear-gradient(
    45deg,
    #f3ec78 0%,
    #af4261 50%,
    #7b1f3d 100%
  );
  /* add bg animation if possible */
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
