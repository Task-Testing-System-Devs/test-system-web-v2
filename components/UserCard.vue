<template>
  <UCard>
    <template #header>
      <h2 class="text-xl">
        {{ userEntity.firstName }} {{ userEntity.middleName }}
        {{ userEntity.lastName }}
      </h2>
      <p class="pt-4 text-gray-500 text-md">{{ userEntity.departmentName }}</p>
      <p class="pt-2 text-gray-500 text-md">
        {{ userEntity.groupName }}
      </p>
    </template>

    <p class="pb-2">Почта</p>
    <UInput
      disabled
      icon="i-heroicons-envelope"
      size="sm"
      color="white"
      :trailing="false"
      :placeholder="userEntity.email"
    />

    <template #footer>
      <UButton variant="outline" class="px-4 py-2" @click="onLogout"
        >Выйти из аккаунта</UButton
      >
    </template>
  </UCard>
</template>

<script setup lang="ts">
  // accept Props of type userentity
  import type { UserEntity } from "~/entities/user"

  type Props = {
    userEntity: UserEntity
  }

  const apiStore = useApiStore()
  const router = useRouter()

  function onLogout() {
    // logout logic
    console.log("Loggin out...")
    apiStore.logout()
    router.push("/login")
  }

  defineProps<Props>()
</script>
