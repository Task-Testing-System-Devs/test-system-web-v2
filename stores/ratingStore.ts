import { defineStore } from "pinia"
import type { UserEntity } from "~/entities/user"

export const useRatingStore = defineStore("rating", () => {
  const apiStore = useApiStore()

  const users = ref<UserEntity[]>([])

  onMounted(async () => {
    await sortByMarks()
  })

  async function sortByMarks() {
    const response = await apiStore.getRatingByMarks()
    users.value = response.map((item: UserRating) => item.userShortInfo);
    
  }

  async function sortByTasks() {
    const response = await apiStore.getRatingByTasks()
    users.value = response.map((item: UserRating) => item.userShortInfo);
  }

  async function downloadByTasks() {
    await apiStore.downloadRatingByTasks();
  }

  async function downloadByMarks() {
    await apiStore.downloadRatingByMarks();
  }

  return {
    users,
    sortByMarks,
    sortByTasks,
    downloadByMarks,
    downloadByTasks,
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }
