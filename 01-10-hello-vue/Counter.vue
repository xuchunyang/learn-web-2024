<script setup>
import {ref} from 'vue'

const counter = ref(0)
</script>

<template>
  <div class="counter">
    <div class="text">Counter: {{ counter }}</div>
    <button @click="counter++">Increment</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  margin-bottom: 0.5rem;
}

button {
  background-color: #41b883;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
</style>