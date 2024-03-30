import axios from "axios"

const clientMainApi = axios.create({
  baseURL: "http://91.193.182.178:8080/api",
})

const clientEjudgeApi = axios.create({
  baseURL: "http://91.193.182.178:3000/api",
})

export { clientMainApi, clientEjudgeApi }
