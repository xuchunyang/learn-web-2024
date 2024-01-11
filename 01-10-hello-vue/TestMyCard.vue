<script setup>
import { ref } from "vue";
import MyCard from "./MyCard.vue";
import { ElMessage } from "element-plus";

const isCard1Visible = ref(false);
</script>

<template>
  <MyCard v-if="isCard1Visible" @close="isCard1Visible = false" />
  <el-button v-if="!isCard1Visible" @click="isCard1Visible = true"
    >显示卡片 1
  </el-button>

  <MyCard v-slot="slotProps">
    <pre>{{ slotProps }}</pre>
  </MyCard>

  <MyCard>
    <template #default="slotProps">
      <pre>{{ slotProps }}</pre>
    </template>
    <template #footer="slotProps">
      <pre>{{ slotProps }}</pre>
    </template>
  </MyCard>

  <MyCard @close="ElMessage.success('received closed event')">
    <template #header>
      <h2>Card 2</h2>
    </template>
    <p>This is the content for the card 2.</p>
    <template #footer>
      <p>Card 2 footer</p>
    </template>
  </MyCard>
</template>
