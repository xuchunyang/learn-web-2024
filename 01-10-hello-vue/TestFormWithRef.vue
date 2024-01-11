<script setup>
import { ref } from "vue";

const loading = ref(false);
const form = ref({});

const loadData = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    // form.value = {
    //   name: "John",
    //   title: "Engineer",
    //   description: "This is a description",
    // };
    // fake the data randomly
    form.value = {
      name: Math.random().toString(36).substring(7),
      title: Math.random().toString(36).substring(7),
      description: Math.random().toString(36).substring(7),
    };
  }, 0);
};

loadData();
</script>

<template>
  <div style="margin: 80px 0">
    <h1>TestFormWithRef</h1>
    <el-button @click="loadData">Load Data</el-button>
    <pre>{{ form }}</pre>
    <el-form v-if="!loading">
      <el-form-item v-for="(_, key) in form" :key="key" label-width="80">
        <template #label>
          <span style="text-transform: capitalize">{{ key }}</span>
        </template>
        <el-input v-model="form[key]" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
form {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 4px;
  margin: 12px 0;
}
</style>
