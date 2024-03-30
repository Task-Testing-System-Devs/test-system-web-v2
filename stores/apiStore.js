import { defineStore } from "pinia"
import { clientEjudgeApi, clientMainApi } from "~/api/apiClients"

export const useApiStore = defineStore("api", () => {
  const mainApi = clientMainApi
  const ejudgeApi = clientEjudgeApi

  async function login({ email, password }) {
    // MOCK:
    await new Promise(resolve => setTimeout(resolve, 2000))
    useCookie("userRole").value = "teacher"
    useCookie("token").value =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFjaGVyQGhzZS5ydSIsImlhdCI6MTcxMDUwMjkwMywiZXhwIjoxNzExMTA3NzAzfQ.1B6bgtCdE7D5pToV0w9b8HYjuBPnWw-QHSjg2fMzxqo"
    return {
      role: "teacher",
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFjaGVyQGhzZS5ydSIsImlhdCI6MTcxMDUwMjkwMywiZXhwIjoxNzExMTA3NzAzfQ.1B6bgtCdE7D5pToV0w9b8HYjuBPnWw-QHSjg2fMzxqo",
    }
    try {
      let { data } = await mainApi.post("/auth/login", {
        email,
        password,
      })
      useCookie("token").value = data.token
      useCookie("userRole").value = data.role
      // TODO добавить токен в хедеры мейн клиента в мидлварину
      return data
    } catch (e) {
      console.log("ERROR:", e)
      return { error: e }
    }
  }

  function logout() {
    useCookie("token").value = ""
  }

  function isLoggedIn() {
    let token = useCookie("token").value
    if (!token) return false
    return true
  }

  async function getRatingByMarks() {
    // MOCK:
    await new Promise(resolve => setTimeout(resolve, 500))
    return [
      {
        id: 12312,
        role: "student",
        firstName: "Old",
        middleName: "Testovich",
        lastName: "Testov",
        email: "ebstartsev@edu.hse.ru",
        departmentName: "Информатика, инженерия и математика",
        groupName: "БПИ219",
      },
      {
        id: 12313,
        role: "student",
        firstName: "Old",
        middleName: "Testovich",
        lastName: "Testov",
        email: "ebstartsev@edu.hse.ru",
        departmentName: "Информатика, инженерия и математика",
        groupName: "БПИ219",
      },
    ]
  }

  async function getRatingByTasks() {
    // MOCK:
    await new Promise(resolve => setTimeout(resolve, 500))
    return [
      {
        id: 12313,
        role: "student",
        firstName: "Old",
        middleName: "Testovich",
        lastName: "Testov",
        email: "ebstartsev@edu.hse.ru",
        departmentName: "Информатика, инженерия и математика",
        groupName: "БПИ219",
      },
      {
        id: 12312,
        role: "student",
        firstName: "Old",
        middleName: "Testovich",
        lastName: "Testov",
        email: "ebstartsev@edu.hse.ru",
        departmentName: "Информатика, инженерия и математика",
        groupName: "БПИ219",
      }
    ]
  }

  return {
    login,
    logout,
    isLoggedIn,
    getRatingByTasks,
    getRatingByMarks,
  }
})
