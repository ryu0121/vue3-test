<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  addTask: { type: Function, required: true },
})

const taskNameRef = ref('');
</script>

<template>
  <div>
    <input type="text" v-model="taskNameRef" />
    <button @click="addTask(taskNameRef)">Add</button>
  </div>
</template>
