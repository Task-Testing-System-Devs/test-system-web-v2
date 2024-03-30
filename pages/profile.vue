<template>
  <!-- <h1 class="text-2xl">Профиль</h1> -->

  <div class="flex flex-col items-start justify-center w-full mt-20 h-fit">
    <div class="flex flex-row justify-start w-full">
      <img class="w-60" src="/img/profile-illustration-1.svg" />
      <div class="flex-auto"></div>
      <img class="w-60" src="/img/profile-illustration-2.svg" />
    </div>

    <UserCard :userEntity="userStore.userEntity" class="w-full" />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "profile",
  })

  // create example user model
  const userStore = useUserStore()
</script>
