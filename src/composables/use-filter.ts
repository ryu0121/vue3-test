import { computed, ref, isRef } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import type Task from '../models/task'

const useFilter = (tasks: (Task[] | Ref<Task[]>) = []) => {
  const tasksRef = isRef(tasks) ? tasks : ref(tasks);
  const valid = Array.isArray(tasksRef.value);

  const doingTasks: ComputedRef<Task[]> = valid ?
    computed(() => tasksRef.value.filter(t => !t.status)) :
    computed(() => []);
  const completedTasks: ComputedRef<Task[]> = valid ?
    computed(() => tasksRef.value.filter(t => t.status)) :
    computed(() => []);

  return {
    doingTasks,
    completedTasks,
  }
}

export default useFilter;