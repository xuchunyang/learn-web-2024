<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  notes: "",
  isReady: false,
  framework: "vue",
  rating: 5,
});

// 表单验证（客户端）
// 表单提交
// 表单提交报错

const noop = () => {};
</script>

<template>
  <form @submit.prevent="noop">
    <h2>Hello Form</h2>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="form.name" />
    </div>
    <div>
      <label for="notes">Notes</label>
      <textarea id="notes" v-model="form.notes"></textarea>
    </div>
    <div>
      <label for="isReady">Is Ready</label>
      <input type="checkbox" id="isReady" v-model="form.isReady" />
    </div>
    <div>
      <label for="framework">Framework</label>
      <select id="framework" v-model="form.framework">
        <option value="vue">Vue</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
      </select>
    </div>
    <div>
      <label for="rating">Rating</label>
      <input type="range" id="rating" v-model="form.rating" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  <pre v-text="JSON.stringify(form, null, 2)"></pre>
</template>

<style scoped>
form > * + * {
  margin-top: 1rem;
}

pre {
  padding: 12px;
  background-color: rgba(211, 211, 211, 0.57);
}
</style>
