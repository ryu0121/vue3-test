import { computed } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import type Task from '../models/task'

const useFilter = (tasksRef: Ref<Task[]>) => {
  const doingTasks: ComputedRef<Task[]> = computed(() => tasksRef.value.filter(t => !t.status))
  const completedTasks: ComputedRef<Task[]> = computed(() => tasksRef.value.filter(t => t.status))

  return {
    doingTasks,
    completedTasks,
  }
}

export default useFilter;