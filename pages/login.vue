<template>
  <!-- <div class="absolute w-10 left-28 top-40">
    <Logo />
  </div> -->
  <UNotifications />

  <div class="flex flex-row items-center justify-center">
    <div class="flex flex-col items-center justify-center min-h-screen">
      <!-- Card for the login form -->
      <div class="w-full max-w-md p-8 bg-white rounded-l">
        <h2 class="mb-4 text-2xl font-bold">Вход в аккаунт</h2>
        <h3 class="mb-6 text-sm text-gray-500">
          Если у вас нет аккаунта, то обратитесь в учебное заведение
        </h3>

        <!-- Login form -->
        <LoginForm> </LoginForm>
      </div>
    </div>

    <img class="w-1/2" src="/img/login-illustration.svg" alt="Frame SVG" />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "login",
  })
</script>
