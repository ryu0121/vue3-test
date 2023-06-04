import { computed, ref } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import type Task from '../models/task'

const useSearcher = (tasksRef: Ref<Task[]>) => {
  const searchTextRef = ref('');
  const search: ComputedRef<Task[]> = computed(
    () => tasksRef.value.filter(t => t.name.includes(searchTextRef.value))
  )

  return {
    searchTextRef,
    search,
  }
}

export default useSearcher;