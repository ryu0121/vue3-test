import { ref } from 'vue';
import type { Ref } from 'vue';
import type Task from '../models/task'

const useAddingTask = (tasksRef: Ref<Task[]>) => {
  const taskNameRef = ref('');

  const addTask = () => {
    tasksRef.value.push({
      name: taskNameRef.value,
      status: false,
    });
    taskNameRef.value = '';
  }

  return {
    taskNameRef,
    addTask,
  }
}

export default useAddingTask;