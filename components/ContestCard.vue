<template>
  <UCard
    :ui="{
      strategy: 'override',
      divide: '',

      header: {
        padding: 'px-4 pt-8 sm:px-6',
      },
      body: {
        padding: 'px-4 py-0 sm:p-6',
      },
      footer: {
        padding: 'px-4 pb-8 sm:px-6',
      },
    }"
  >
    <template #header>
      <div class="flex flex-row space-x-10">
        <h2 class="text-2xl">
          {{ contestEntity.title }} (#{{ contestEntity.id }})
        </h2>
        <div class="flex-auto"></div>
        <p class="text-gray-500">
          <div class="flex flex-row items-center space-x-1">
            <p class="mr-2">Сложность: </p>
            <svg v-for="i in parseInt(contestEntity.difficulty)" width="15" height="15" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" :fill="difficultyColor" />
            </svg>
            <svg v-for="i in 5 - parseInt(contestEntity.difficulty)" width="15" height="15" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#EBF3FF" />
            </svg>
          </div>
        </p>
      </div>
    </template>

    <p class="text-gray-500 text-md">{{ contestEntity.description }}</p>

    <p class="text-gray-500 text-md">
      Допустимые языки: {{ contestEntity.availableLanguages.join(", ") }}
    </p>

    <!-- description: string; difficulty: string; availableLanguages: string[]; -->

    <template #footer v-if="!isInsideContest">
      <NuxtLink :to="`/contests/${contestEntity.id}/0`">
        <UButton size="xl" class="px-16 py-3" @click="onContestStart">
          Перейти к контесту
        </UButton>
      </NuxtLink>
    </template>
    <!-- <template #footer v-else>
      <NuxtLink :to="`/contests/${contestEntity.id}`">
        <UButton
          size="xl"
          class="px-16 py-3"
          @click="onContestComplete"
          variant="outline"
        >
          Завершить контест
        </UButton>
      </NuxtLink>
    </template> -->
  </UCard>
</template>

<script setup lang="ts">
  import type { ContestEntity } from "~/entities/contest"

  type Props = {
    contestEntity: ContestEntity
    isInsideContest?: boolean
  }

  function onContestStart() {
    // logout logic
    console.log("Starting contest...")
  }

  function onContestComplete() {
    // logout logic
    console.log("Exiting contest...")
  }

  const {contestEntity} = defineProps<Props>()

  const difficultyColor = computed(() => {
    if (contestEntity.difficulty === "1/5") return "#FFD700"
    if (contestEntity.difficulty === "2/5") return "#FFA500"
    if (contestEntity.difficulty === "3/5") return "#FF8C00"
    if (contestEntity.difficulty === "4/5") return "#FF4500"
    if (contestEntity.difficulty === "5/5") return "#FF0000"
    return "#000000"
  });
</script>
