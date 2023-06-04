<script setup lang="ts">
import useTaskList from './composables/use-task-list'
import useAddingTask from './composables/use-adding-task'
import useSearcher from './composables/use-searcher'
import useFilter from './composables/use-filter'

const { tasksRef, toggleTask } = useTaskList();
const { taskNameRef, addTask } = useAddingTask(tasksRef);
const { searchTextRef, search } = useSearcher(tasksRef.value);
const { doingTasks, completedTasks } = useFilter(search);

</script>

<template>
  <div>
    <div>
      <input type="text" v-model="taskNameRef" />
      <button @click="addTask">Add</button>
    </div>
    <div>
      <input type="text" v-model="searchTextRef" />Search
    </div>
    <div class="task-list-wrapper">
      <ul>
        <h4>DOING</h4>
        <li v-for="(task, index) in doingTasks" :key="index">
          <input type="checkbox" :checked="task.status" disabled />
          <label>{{ task.name }}</label>
          <button @click="toggleTask(task, true)">toggle</button>
        </li>
      </ul>
      <ul>
        <h4>COMPLETED</h4>
        <li v-for="(task, index) in completedTasks" :key="index">
          <input type="checkbox" :checked="task.status" disabled />
          <label>{{ task.name }}</label>
          <button @click="toggleTask(task, false)">toggle</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.task-list-wrapper {
  display: flex;
  justify-content: center;
}
</style>