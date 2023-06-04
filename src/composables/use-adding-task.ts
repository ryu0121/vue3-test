import type { Ref } from 'vue';
import type Task from '../models/task'

const useAddingTask = (tasksRef: Ref<Task[]>) => {
  const addTask = (taskName: string) => {
    tasksRef.value.push({
      name: taskName,
      status: false,
    });
  }

  return {
    addTask,
  }
}

export default useAddingTask;