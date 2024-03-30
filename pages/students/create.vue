<template>
  <h1 class="mb-8 text-2xl">Регистрация студента</h1>

  <div class="flex flex-col space-y-6 text-sm">
    <div class="space-y-2">
      <p>Импортировать аккаунты из файла:</p>
      <div class="flex flex-row mb-8 space-x-4">
        <input
          class="p-2 text-sm bg-white border border-gray-300 rounded-md"
          type="file"
          @change="e => handleFileUpload(e)"
          accept=".zip"
        />
        <UButton
          color="white"
          variant="outline"
          label="Импортировать"
          @click="handleImport"
        />
      </div>
    </div>

    <div class="space-y-2">
      <p>Имя:</p>
      <UInput placeholder="Евгений" v-model="student.firstName" />
    </div>

    <div class="space-y-2">
      <p>Фамилия:</p>
      <UInput placeholder="Нугаев" v-model="student.lastName" />
    </div>

    <div class="space-y-2">
      <p>Отчество:</p>
      <UInput placeholder="Студентович" v-model="student.middleName" />
    </div>

    <div class="space-y-2">
      <p>Почта:</p>
      <UInput placeholder="ebstartsev@edu.hse.ru" v-model="student.email" />
    </div>

    <div class="space-y-2">
      <p>Пароль:</p>
      <UInput placeholder="qwerty_123$!#@" v-model="student.password" />
    </div>

    <div class="space-y-2">
      <p>Организация:</p>
      <UInput
        placeholder="Информатика,
  инженерия и математика"
        v-model="student.department"
      />
    </div>

    <div class="space-y-2">
      <p>Группа:</p>
      <UInput placeholder="10И3" v-model="student.group" />
    </div>
  </div>

  <UButton
    class="px-6 py-3 mt-8"
    color="primary"
    label="Зарегистрировать"
    @click="registerStudent"
  />
</template>

<script setup lang="ts">
  const student = ref({
    firstName: "Evgeny",
    lastName: "Studentov",
    middleName: "Studentovich",
    email: "ebstartsev@edu.hse.ru",
    password: "qwerty_123$!#@",
    department: "Информатика, инженерия и математика",
    group: "10И3",
  })

  const registerStudent = () => {
    console.log("student", student.value)
    // отправить в апи
  }

  const fileRef = ref<File>()

  function handleFileUpload(e: Event) {
    const input = e.target as HTMLInputElement
    if (!input.files) return
    const file = input.files[0]
    console.log("file", file)

    // p.testSamples.push(file)
    fileRef.value = file
  }

  function handleImport() {
    console.log("import from file:", fileRef.value)
    /// отправить на серв
  }
</script>
