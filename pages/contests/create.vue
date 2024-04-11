<template>
  <h1 class="mb-8 text-2xl">Создание контеста</h1>
  <div class="flex flex-col">
    <p>Импортировать контест:</p>
    <div class="flex flex-row mt-2 space-x-4">
      <UInput placeholder="ID контеста" v-model="importedContestId" />
      <UButton
        color="white"
        variant="outline"
        label="Импортировать"
        @click="handleImport"
      />
    </div>

    <p class="mt-8 mb-2">Название контеста:</p>
    <UInput placeholder="Контест по Декартовым деревьям" />
    <div class="flex flex-row mt-4 space-x-4">
      <div class="flex flex-col w-full">
        <p class="mb-2">Начало контеста:</p>
        <UInput type="datetime-local" />
      </div>
      <div class="flex flex-col w-full">
        <p class="mb-2">Конец контеста:</p>
        <UInput type="datetime-local" />
      </div>
    </div>

    <div class="flex flex-row items-center justify-start mt-6 space-x-2">
      <p class="text-gray-800">Сложность контеста:</p>
      <UDropdown
        :items="[
          difficulties.map(lang => ({
            label: lang,
            click: () => {
              selectedDifficulty = lang
            },
          })),
        ]"
        v-model="selectedDifficulty"
        class="w-48"
      >
        <UButton
          class="w-fit"
          color="white"
          variant="outline"
          :label="selectedDifficulty"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </UDropdown>
    </div>

    <p class="mt-8">Задачи:</p>
    <UButton
      class="mt-2"
      color="white"
      variant="outline"
      label="Добавить задачу"
      @click="addProblem"
    />

    <div v-for="(p, i) in problems" :key="i">
      <div class="flex flex-col mt-4 space-y-1 animate-fade-in">
        <div class="flex flex-row items-center justify-start space-x-2">
          <UButton @click="removeProblem(i)">
            <UIcon name="i-heroicons-trash" />
          </UButton>
          <p class="text-sm">Задача {{ i + 1 }}</p>
        </div>
        <UInput placeholder="Название задачи" v-model="p.title" />
        <UInput
          placeholder="Ограничение по времени"
          v-model="p.restrictions.time"
        />
        <UInput
          placeholder="Ограничение по памяти"
          v-model="p.restrictions.memory"
        />
        <UTextarea placeholder="Условие задачи" v-model="p.statement" resize />

        <!-- <UInput
          type="file"
          placeholder="Файл с примерами (.zip)"
          v-model="p.testSamples"
        ></UInput> -->

        <p>Тесты</p>
        <input
          class="w-full p-2 text-sm bg-white border border-gray-300 rounded-md"
          type="file"
          @change="e => handleFileUpload(e, p)"
          accept=".zip"
        />
      </div>
    </div>

    <UButton
      class="items-center justify-center mt-6"
      color="primary"
      label="Создать контест"
      @click="createContest"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import type { ProblemEntity } from "~/entities/problem"

  const selectedDifficulty = ref<number>(1)
  const difficulties = [1, 2, 3, 4, 5]

  const addProblem = () => {
    console.log("Add problem")
    problems.value.push({
      id: 1,
      title: "",
      restrictions: {
        memory: null, // in megabytes
        time: null, // in milliseconds
        input: "input.txt",
        output: "output.txt",
      },
      statement: "",
      testSamples: [],
    } as ProblemEntity)
  }

  const removeProblem = (index: number) => {
    problems.value.splice(index, 1)
  }

  const problems = ref<ProblemEntity[]>([])

  function handleFileUpload(e: Event, p: ProblemEntity) {
    const input = e.target as HTMLInputElement
    if (!input.files) return
    const file = input.files[0]
    console.log("file", file)

    // p.testSamples.push(file)
  }

  const importedContestId = ref<string>("")

  function handleImport() {
    console.log("Import contest from contest by id", importedContestId.value)
  }

  function createContest() {
    console.log("Create contest", problems.value)

    ////////////////////////////////// возможно получится просто отправить method: "POST", body: formData и в этой формдате тупо запихнуть все данные контеста contestEntity
    ////////////////////////////////// contestEntity нужно создать и байнднуть к юаю

    ////////////////////////////////// P. S. файл получается из problems.testSamples[i]
    // const file = event.target.files[0]; // Получаем файл из события

    // const formData = new FormData(); // Создаем объект FormData

    // formData.append('file', file); // Добавляем файл в FormData

    // // Определяем URL сервера
    // const url = 'https://your-server.com/upload-file';

    // // Отправляем запрос на сервер
    // fetch(url, {
    //   method: 'POST', // Метод запроса
    //   body: formData, // Тело запроса содержит FormData с файлом
    //   // Важно: Не устанавливаем заголовок Content-Type, браузер сделает это автоматически
    // })
    // .then(response => {
    //   if (response.ok) {
    //     return response.json(); // Обрабатываем успешный ответ
    //   }
    //   throw new Error('Network response was not ok.'); // Обрабатываем ошибку сети
    // })
    // .then(data => {
    //   console.log(data); // Действия после успешной отправки
    // })
    // .catch(error => {
    //   console.error('There was a problem with your fetch operation:', error); // Обрабатываем ошибку запроса
    // });
  }
</script>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 100vh;
    }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
</style>
