import { computed, ref } from 'vue';
import type { ComputedRef } from 'vue';
import type Task from '../models/task'

const useSearcher = (tasks: Task[] = []) => {
  const searchTextRef = ref('');
  const tasksRef = ref(tasks);
  const valid = Array.isArray(tasksRef.value);

  const search: ComputedRef<Task[]> = valid ?
    computed(() => tasksRef.value.filter(t => t.name.includes(searchTextRef.value))) :
    computed(() => []);

  return {
    searchTextRef,
    search,
  }
}

export default useSearcher;