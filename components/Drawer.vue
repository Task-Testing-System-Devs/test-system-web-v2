<template>
  <div class="flex justify-center w-full h-full flex-column">
    <!-- <Logo class="w-16" /> -->
    <div class="justify-start w-full py-10">
      <Logo class="w-20 pl-4 mb-16" />
      <UVerticalNavigation
        :ui="{
          size: 'text-sm',
          font: 'font-light',
          padding: 'my-2 py-4 px-8 space-x-3',
        }"
        class="w-full"
        :links="links"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const userRole = useCookie("userRole")
  const teacherRoutes = [
    {
      label: "Создать контест",
      icon: "i-heroicons-plus",
      to: "/contests/create",
    },
    {
      label: "Зарегистрировать студента",
      icon: "i-heroicons-plus",
      to: "/students/create",
    },
  ]
  let links = [
    userRole.value === "teacher" ? [...teacherRoutes] : [],
    [
      // {
      //   label: "Главная",
      //   icon: "i-heroicons-home",
      //   to: "/",
      // },
      {
        label: "Контесты",
        icon: "i-heroicons-cube",
        to: "/contests",
      },
      // {
      //   label: "Задачи",
      //   icon: "i-heroicons-document-check",
      //   to: "/problems",
      // },
      {
        label: "Рейтинг",
        icon: "i-heroicons-star",
        to: "/rating",
      },
      {
        label: "Решения",
        icon: "i-heroicons-command-line",
        to: "/submissions",
      },
    ],
    [
      {
        label: "Профиль",
        icon: "i-heroicons-user",
        to: "/profile",
      },
    ],
  ]
</script>
