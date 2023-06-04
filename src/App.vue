<script setup lang="ts">
import AddTask from './components/AddTask.vue'
import TaskRow from './components/TaskRow.vue'

import useTaskList from './composables/use-task-list'
import useAddingTask from './composables/use-adding-task'
import useSearcher from './composables/use-searcher'
import useFilter from './composables/use-filter'

const { tasksRef, toggleTask } = useTaskList();
const { addTask } = useAddingTask(tasksRef);
const { searchTextRef, search } = useSearcher(tasksRef);
const { doingTasks, completedTasks } = useFilter(search);

</script>

<template>
  <div>
    <div>
      <AddTask :addTask="addTask" />
    </div>
    <div>
      <input v-model="searchTextRef" type ="text" />Search
    </div>
    <div class="task-list-wrapper">
      <div>
        <TaskRow
          title="DOING"
          :tasks="doingTasks"
          :toStatus=true
          :toggleTask="toggleTask" />
      </div>
      <div>
        <TaskRow
          title="COMPLETED"
          :tasks="completedTasks"
          :toStatus=false
          :toggleTask="toggleTask" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-list-wrapper {
  display: flex;
  justify-content: center;
}
</style>