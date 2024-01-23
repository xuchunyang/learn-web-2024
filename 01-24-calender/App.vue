<script setup>
import { ref } from "vue";

const months = ref(
  Array.from({ length: 12 }, (_, i) => i + 1).map(
    (i) => new Date(`2024-${i}-1`),
  ),
);
</script>

<template>
  <el-row gutter="10">
    <el-col :span="4" v-for="(_, idx) in months">
      <el-card>
        <template v-if="idx === 0">
          <el-calendar
            v-model="months[idx]"
            :range="[new Date('2024-01-01'), new Date('2024-01-27')]"
          ></el-calendar>
        </template>
        <template v-else>
          <el-calendar v-model="months[idx]"></el-calendar>
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>
