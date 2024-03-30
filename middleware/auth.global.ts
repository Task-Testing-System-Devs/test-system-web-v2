// middleware/auth.global.ts
import { defineNuxtRouteMiddleware } from "#app"
import { useApiStore } from "~/stores/apiStore"

export default defineNuxtRouteMiddleware((to, from) => {
  const apiStore = useApiStore()

  if (to.path !== "/login" && !apiStore.isLoggedIn()) {
    return navigateTo("/login")
  }
})
