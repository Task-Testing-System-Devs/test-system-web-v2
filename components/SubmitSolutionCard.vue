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
      <h3 class="text-2xl">Решение</h3>
      <div class="flex flex-row justify-between mt-8">
        <!-- <div class="flex-auto"></div> -->
        <div class="flex flex-col items-start space-y-2">
          <p class="text-gray-800">Язык:</p>
          <UDropdown
            :items="[
              contestEntity.availableLanguages.map(lang => ({
                label: lang,
                click: () => {
                  selectedLanguage = lang
                },
              })),
            ]"
            v-model="selectedLanguage"
            class="w-48"
          >
            <UButton
              class="w-fit"
              color="white"
              variant="outline"
              :label="selectedLanguage"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            />
          </UDropdown>
        </div>
      </div>
    </template>

    <template #footer>
      <UTextarea
        class="mt-4"
        v-model="solutionCode"
        placeholder="Ваше решение"
        rows="10"
      />

      <div class="flex flex-row justify-between mt-4">
        <UButton
          variant="solid"
          size="lg"
          @click="onSubmit"
          :disabled="!solutionCode || isSolutionLoaded"
          :loading="isSolutionLoading"
        >
          Отправить решение
        </UButton>
        <!-- <UButton
          variant="outline"
          size="lg"
          @click="onNextProblem"
          :disabled="!isSolutionLoaded"
        >
          Следующая задача
        </UButton> -->
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
  import { ref, defineEmits } from "vue"
  import type { ProblemEntity } from "~/entities/problem"
  import type { ContestEntity } from "~/entities/contest"
  import {  } from 'vue';

  const emit = defineEmits(['show-submission']);

  const emitShowEvent = () => {
    emit('show-submission');
  };

  type Props = {
    problemEntity: ProblemEntity
    contestEntity: ContestEntity
  }

  defineProps<Props>()

  const selectedLanguage = ref("C++")
  const solutionCode = ref("")
  const isSolutionLoading = ref(false)
  const isSolutionLoaded = ref(false)

  function onSubmit() {
    console.log("Submitting solution...")
    isSolutionLoading.value = true
    // todo send solution to the server
    setTimeout(() => {
      isSolutionLoading.value = false
      emitShowEvent()
      isSolutionLoaded.value = true
    }, 3200)
  }

  function onNextProblem() {
    console.log("Moving to the next problem...")
  }

  const toast = useToast()
  watch(isSolutionLoaded, newValue => {
    if (newValue) {
      toast.add({
        title: "Отправили ваше решение на проверку!",
        icon: "i-heroicons-check",
      })
    }
  })
</script>
