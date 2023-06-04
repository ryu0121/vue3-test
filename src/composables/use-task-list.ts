import { ref } from 'vue';
import type Task from '../models/task'

const useTaskList = () => {
  const tasksRef = ref<Task[]>([]);

  const toggleTask = (task: Task, status: boolean) => {
    const index = tasksRef.value.indexOf(task);
    tasksRef.value.splice(index, 1, { ...task, status: status });
  };

  return {
    tasksRef,
    toggleTask,
  }
}

export default useTaskList;