import { defineStore } from "pinia"
import { clientEjudgeApi, clientMainApi } from "~/api/apiClients"

export const useApiStore = defineStore("api", () => {
  const mainApi = clientMainApi
  const ejudgeApi = clientEjudgeApi

  async function login({ email, password }) {
    // MOCK:
    // await new Promise(resolve => setTimeout(resolve, 2000))
    // useCookie("userRole").value = "teacher"
    // useCookie("token").value =
    //   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFjaGVyQGhzZS5ydSIsImlhdCI6MTcxMDUwMjkwMywiZXhwIjoxNzExMTA3NzAzfQ.1B6bgtCdE7D5pToV0w9b8HYjuBPnWw-QHSjg2fMzxqo"
    // return {
    //   role: "teacher",
    //   token:
    //     "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFjaGVyQGhzZS5ydSIsImlhdCI6MTcxMDUwMjkwMywiZXhwIjoxNzExMTA3NzAzfQ.1B6bgtCdE7D5pToV0w9b8HYjuBPnWw-QHSjg2fMzxqo",
    // }
    try {
      let { data } = await mainApi.post("/auth/login", {
        email,
        password,
      })
      useCookie("token").value = data.token
      useCookie("userRole").value = data.role
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
    try {
      let { data } = await mainApi.get("/grade/by-marks", {
        headers: {
          "Authorization": "Bearer " + useCookie("token").value
        }
      },)
      return data
    } catch (e) {
      console.log("ERROR:", e)
      return { error: e }
    }
  }

  async function getRatingByTasks() {
    try {
      let { data } = await mainApi.get("/grade/by-tasks-amount", {
        headers: {
          "Authorization": "Bearer " + useCookie("token").value
        }
      },)
      return data
    } catch (e) {
      console.log("ERROR:", e)
      return { error: e }
    }
  }

  async function downloadRatingByTasks() {
    try {
      let response = await mainApi.get("/grade/by-tasks-amount/download-csv", {
        headers: {
          "Authorization": "Bearer " + useCookie("token").value
        },
        responseType: 'blob'
      },)
      console.log(response);
      const file = new Blob([response], { type: "text/csv;charset=utf-8" });

      const url = window.URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "by-tasks-rating.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.log("ERROR:", e)
      return { error: e }
    }
  }

  async function downloadRatingByMarks() {
    try {
      let response = await mainApi.get("/grade/by-marks/download-csv", {
        headers: {
          "Authorization": "Bearer " + useCookie("token").value
        },
        responseType: 'blob'
      },)
      const file = new Blob([response], { type: "text/csv;charset=utf-8" });

      const url = window.URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "by-marks-rating.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.log("ERROR:", e)
      return { error: e }
    }
  }

  async function getProfileInfo() {
    try {
      let path = "/profile/get-student-info"
      if (useCookie("userRole").value === "teacher") {
        path = "/profile/get-teacher-info"
      }
      let { data } = await mainApi.get(path, {
        headers: {
          "Authorization": "Bearer " + useCookie("token").value
        }
      },)
      return data
    } catch (e) {
      console.log("ERROR:", e)
      return { error: e }
    }
  }

  async function getSubmissions() {
    try {
      let path = "/solutions/get-all-user"
      if (useCookie("userRole").value === "teacher") {
        path = "/solutions/get-all"
      }
      let { data } = await mainApi.get(path, {
        headers: {
          "Authorization": "Bearer " + useCookie("token").value
        }
      },)
      return data
    } catch (e) {
      console.log("ERROR:", e)
      return { error: e }
    }
  }

  async function registerStudent(student) {
    try {
      const path = "/auth/register"
      let { data } = await mainApi.post(path, student, {
        headers: {
          "Authorization": "Bearer " + useCookie("token").value
        }
      },)
      return data
    } catch (e) {
      console.log("ERROR:", e)
      return { error: e }
    }
  }

  return {
    login,
    logout,
    isLoggedIn,
    getRatingByTasks,
    getRatingByMarks,
    downloadRatingByTasks,
    downloadRatingByMarks,
    getSubmissions,
    getProfileInfo,
    registerStudent,
  }
})
