// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxt/ui",
  ],

  colorMode: {
    preference: "light",
  },

  imports: {
    dirs: ["stores"],
  },
})

/*
at the end of each store file after the store itself put this:
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
}
 */
