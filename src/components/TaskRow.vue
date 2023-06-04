<script setup lang="ts">
import type Task from '../models/task'

defineProps<{
  title: string,
  tasks: Task[],
  toStatus: boolean,
  toggleTask: (task: Task, status: boolean) => void
}>()
</script>

<template>
  <ul>
    <h4>{{ title }}</h4>
    <li v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" :checked="task.status" disabled />
      <label>{{ task.name }}</label>
      <button @click="toggleTask(task, toStatus)">toggle</button>
    </li>
  </ul>
</template>