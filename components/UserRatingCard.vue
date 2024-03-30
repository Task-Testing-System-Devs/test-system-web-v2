<template>
  <div class="flex flex-row bg-white rounded-xl card">
    <div class="">
      <div
        :class="ratingColorClass"
        class="flex items-center justify-center w-16 h-16 rounded-l-xl text-md"
      >
        {{ userRating + 1 }}
      </div>
    </div>
    <h3 class="flex items-center justify-center pl-6 text-md">
      {{ userEntity.firstName }} {{ userEntity.middleName }}
      {{ userEntity.lastName }}
    </h3>
  </div>
</template>

<script setup lang="ts">
  import type { UserEntity } from "~/entities/user"

  type Props = {
    userEntity: UserEntity
    userRating: number
  }

  let { userRating } = defineProps<Props>()

  const ratingColorClass = computed(() => {
    if (userRating === 0) return "bg-[#FCDA83]" // Цвет для 1 места
    if (userRating === 1) return "bg-[#C2C1BC]" // Цвет для 2 места
    if (userRating === 2) return "bg-[#E9BF96]" // Цвет для 3 места
    return "bg-[#EBF3FF]"
  })
</script>
