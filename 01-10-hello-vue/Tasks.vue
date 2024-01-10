<script setup>
import { onMounted, ref } from "vue";
import autoAnimate from "@formkit/auto-animate";

const tasks = ref([
  { id: 1, title: "吃饭", completed: false, trashed: false },
  { id: 2, title: "睡觉", completed: false, trashed: false },
  { id: 3, title: "打豆豆", completed: false, trashed: false },
  { id: 4, title: "打游戏", completed: false, trashed: false },
  { id: 5, title: "学习", completed: false, trashed: false },
  { id: 6, title: "写代码", completed: false, trashed: false },
  { id: 7, title: "看电影", completed: false, trashed: false },
  { id: 8, title: "看电视剧", completed: false, trashed: false },
  { id: 9, title: "看动漫", completed: false, trashed: false },
  { id: 10, title: "看小说", completed: false, trashed: false },
]);

const newTaskTitle = ref("");
const addTask = () => {
  if (newTaskTitle.value.trim() === "") {
    return;
  }
  tasks.value.push({
    id: tasks.value.length + 1,
    title: newTaskTitle.value,
    completed: false,
    trashed: false,
  });
  newTaskTitle.value = "";
};

// 移动任务的排序
const moveTaskUp = (task) => {
  const index = tasks.value.indexOf(task);
  if (index > 0) {
    const temp = tasks.value[index - 1];
    tasks.value[index - 1] = task;
    tasks.value[index] = temp;
  }
};

const moveTaskDown = (task) => {
  const index = tasks.value.indexOf(task);
  if (index < tasks.value.length - 1) {
    const temp = tasks.value[index + 1];
    tasks.value[index + 1] = task;
    tasks.value[index] = temp;
  }
};

const remainingTaskListRef = ref(null);
onMounted(() => {
  autoAnimate(remainingTaskListRef.value);
});
</script>

<template>
  <div class="tasks">
    <h2>任务列表</h2>
    <p>
      共 {{ tasks.length }} 个任务，{{
        tasks.filter((task) => task.completed).length
      }}
      个已完成，{{ tasks.filter((task) => !task.trashed).length }} 个未删除。
    </p>
    <ul ref="remainingTaskListRef">
      <li v-for="task in tasks.filter((item) => !item.trashed)" :key="task.id">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ completed: task.completed }">{{ task.title }}</span>
        <button type="button" @click="task.trashed = true">删除</button>
        <button type="button" @click="moveTaskUp(task)">上移</button>
        <button type="button" @click="moveTaskDown(task)">下移</button>
      </li>
    </ul>
    <h3>已删除的任务</h3>
    <ul>
      <li v-for="task in tasks.filter((item) => item.trashed)" :key="task.id">
        <span>{{ task.title }}</span>
        <button type="button" @click="task.trashed = false">恢复</button>
      </li>
    </ul>
    <form>
      <input type="text" placeholder="请输入任务标题" v-model="newTaskTitle" />
      <button type="button" @click="addTask">添加任务</button>
    </form>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}

button {
  margin-left: 1rem;
}
</style>
