<script setup>
defineProps({
  showClose: {
    type: Boolean,
    default: true,
  },
});

const greetingMessage = "Hello, Vue!";

defineEmits(["close"]);
</script>

<template>
  <div class="card">
    <button v-if="showClose" @click="$emit('close')" aria-label="Close">
      X
    </button>
    <slot name="header">
      <h2>Card Title</h2>
    </slot>
    <slot :text="greetingMessage">
      <p>卡片内容</p>
    </slot>
    <slot name="footer" :foo="12">
      <p>卡片底部</p>
    </slot>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid lightcoral;
  border-radius: 4px;
  padding: 12px;
  margin: 12px 0;
  position: relative;
}

.card > button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
