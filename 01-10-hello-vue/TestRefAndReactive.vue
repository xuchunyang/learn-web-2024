<script setup>
import { ref, shallowRef } from "vue";

const refDemo = shallowRef({
  str: "hello",
  arr: [1, 2, 3, [4, 5, 6]],
});

const test1 = () => refDemo.value.arr[3].push(7);

const test2 = () => (refDemo.value.arr = [1, 2, 3, [4, 5, 6, 7]]);

const test3 = () =>
  refDemo.value.arr.map((item) => {
    // if item is an array, reverse it, otherwise return it
    return Array.isArray(item) ? item.reverse() : item;
  });

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

const test4 = () => refDemo.value.arr.push(100);
const test5 = () => (refDemo.value.str = "world");
</script>

<template>
  <div style="margin: 20px 0">
    <pre>{{ refDemo }}</pre>
    <el-row>
      <el-button @click="test1">test1</el-button>
      <el-button @click="test2">test2</el-button>
      <el-button @click="test3">test3</el-button>
      <el-button @click="test4">test4</el-button>
      <el-button @click="test5">test5</el-button>
    </el-row>
  </div>
</template>
