import { defineStore } from "pinia"
import type { UserEntity } from "~/entities/user"

export const useRatingStore = defineStore("rating", () => {
  const apiStore = useApiStore()

  const users = ref<UserEntity[]>([])

  onMounted(async () => {
    users.value = await apiStore.getRatingByMarks()
  })

  async function sortByMarks() {
    users.value = await apiStore.getRatingByMarks()
  }

  async function sortByTasks() {
    users.value = await apiStore.getRatingByTasks()
  }

  return {
    users,
    sortByMarks,
    sortByTasks,
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }
