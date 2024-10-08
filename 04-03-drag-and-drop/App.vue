<script setup>
import { dragAndDrop, useDragAndDrop } from "@formkit/drag-and-drop/vue";
import { animations } from "@formkit/drag-and-drop";
import {reactive, ref, useTemplateRef} from "vue";

const myParentRef = useTemplateRef("my-parent");

const animals = ref([
  "🐶 Dog",
  "🐱 Cat",
  "🐭 Mouse",
  "🐹 Hamster",
  "🐰 Rabbit",
]);
dragAndDrop({
  parent: myParentRef,
  values: animals,
  config: {},
});

const myParentRefs = ref([null, null, null]);

const groupedAnimals = reactive([
  {
    group: "Mammals",
    items: ["🐶 Dog", "🐱 Cat", "🐭 Mouse", "🐹 Hamster", "🐰 Rabbit"],
  },
  {
    group: "Birds",
    items: ["🦜 Parrot", "🦢 Swan", "🦆 Duck", "🦉 Owl", "🦚 Peacock"],
  },
  {
    group: "Fish",
    items: ["🐠 Fish", "🐟 Fish", "🐡 Fish", "🦈 Shark", "🐬 Dolphin"],
  },
]);

groupedAnimals.forEach((item) => {
  console.log("item", item, item.items);
  return;
  dragAndDrop({
    // parent: myParentRefs.value,
    values: item.items,
    config: {},
  });
});

// groupedAnimals.value.forEach((item, idx) => {
//   dragAndDrop({
//     parent: myParentRefs.value[idx],
//     values: item.items,
//   });
// });

const [parent, tapes] = useDragAndDrop(
  [
    "Depeche Mode",
    "Duran Duran",
    "Pet Shop Boys",
    "Kraftwerk",
    "Tears for Fears",
    "Spandau Ballet",
  ],
  {
    draggable(el) {
      // console.log("draggable", el);
      return true;
    },
    plugins: [animations()],
  },
);

const todoItems = [
  "Learn C++",
  "Watch Game of Thrones",
  "Read a book",
  "Go to the gym",
  "Learn Vue.js",
];
const doneItems = ["Learn JavaScript", "Learn React", "Learn Node.js"];

const [todoList, todos] = useDragAndDrop(todoItems, {
  group: "todoList",
  plugins: [animations()],
});
const [doneList, dones] = useDragAndDrop(doneItems, {
  group: "todoList",
  plugins: [animations()],
});
</script>

<template>
  <h1>Learn drag and drop from FormKit</h1>

  <ul ref="my-parent">
    <li class="item" v-for="item in animals" :key="item">{{ item }}</li>
  </ul>

  <pre class="raw">{{ tapes }}</pre>

  <ul ref="parent">
    <li class="item" v-for="tape in tapes" :key="tape">{{ tape }}</li>
  </ul>

  <div class="kanban">
    <ul class="todo" ref="todoList">
      <li class="item" v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ul>
    <ul class="done" ref="doneList">
      <li class="item" v-for="done in dones" :key="done">{{ done }}</li>
    </ul>
  </div>
</template>

<style>
body {
  font-family: sans-serif;
  line-height: 1.5;
}

.raw {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
}

.item {
  background-color: #f4f4f4;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: grab;
}

.item + .item {
  margin-top: 5px;
}

.kanban {
  min-height: 500px;
  width: 600px;
  margin: auto;
  display: flex;
  gap: 1rem;
}

.kanban > * {
  width: 50%;
  padding: 2rem;
  background-color: #eee;
}

.done .item {
  background-color: #f0f0f0;
  text-decoration-line: line-through;
}
</style>
