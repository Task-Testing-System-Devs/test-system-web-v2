import { defineStore } from "pinia"
import type { UserEntity } from "~/entities/user"

export const useUserStore = defineStore("user", () => {
  const userEntity = ref<UserEntity>({
    id: 12312,
    role: "student",
    firstName: "Семён",
    middleName: "Тестович",
    lastName: "Котовский",
    email: "sokotovskiy@edu.hse.ru",
    departmentName: "Информатика, инженерия и математика",
    groupName: "БПИ219",
  })

  return {
    userEntity,
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }
