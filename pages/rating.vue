<template>
  <!-- <img src="/img/rating-illustration.svg" class="w-full" /> -->

  <h1 class="mb-12 text-2xl">Продвигайтесь по рейтингу, решая задачи</h1>
  <div class="flex flex-row">
    <div class="flex-auto">
      <div class="flex flex-col">
        <div
          class="flex flex-row items-center justify-start px-6 py-4 mb-8 space-x-4 text-sm bg-white rounded-lg w-fit"
        >
          <p>Сортировать по задачам</p>
          <UToggle size="md" v-model="isRatingByMark" />
          <p>Сортировать по оценкам</p>
        </div>
        <div v-for="(u, i) in users">
          <UserRatingCard class="mb-4" :userEntity="u" :userRating="i" />
        </div>
      </div>
    </div>
    <div class="w-64 ml-8 rounded-lg">
      <img src="/img/rating-illustration-mini.svg" />
      <div v-if="userRole !== 'teacher'">
        <div
          class="flex flex-col items-center justify-center py-8 bg-white rounded-b-lg w-fit h-fit"
        >
          <div class="mb-4 text-xl font-medium text-center">Вы на 7 месте!</div>
          <div class="mb-4 text-center">
            Еще 13 баллов до 6 места. Решайте задачи — зарабатывайте баллы
          </div>
          <NuxtLink to="/contests">
            <UButton class="px-4 py-2"> Решать задачи </UButton>
          </NuxtLink>
        </div>
      </div>
      <div v-else>
        <div
          class="flex flex-col items-center justify-center w-full py-8 bg-white rounded-b-lg h-fit"
        >
          <div class="mb-4 text-xl font-medium text-center">
            Сохраните рейтинг
          </div>
          <UButton
            class="px-4 py-4 mt-4"
            size="xs"
            @click="downloadRatingByMarks"
          >
            Отсортированный по оценкам
          </UButton>
          <UButton
            class="px-4 py-4 mt-2"
            size="xs"
            @click="downloadRatingByTasks"
          >
            Отсортированный по задачам
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const ratingStore = useRatingStore()
  const users = storeToRefs(ratingStore).users
  const userRole = useCookie("userRole")

  const isRatingByMark = ref(true)

  watch(isRatingByMark, newVal => {
    if (newVal) {
      console.log("Rating by marks")
      ratingStore.sortByMarks()
    } else {
      console.log("Rating by tasks")
      ratingStore.sortByTasks()
    }
  })

  function downloadRatingByMarks() {
    console.log("Download rating by marks")
    // ratingStore.downloadRatingByMarks()
  }

  function downloadRatingByTasks() {
    console.log("Download rating by tasks")
    // ratingStore.downloadRatingByTasks()
  }
</script>
