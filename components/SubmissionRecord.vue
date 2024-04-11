<template>
  <div v-if="isVisible">
  <UAccordion
    color="white"
    class="w-full bg-white rounded-md h-fit"
    :items="[submissionEntity]"
  >
    <template #default="{ item, index, open }">
      <UButton
        color="gray"
        variant="ghost"
        class="border-b border-gray-200 dark:border-gray-700"
        :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
      >
        <div class="flex flex-col items-start px-4 py-2">
          <span class="truncate"> {{ submissionEntity.taskName }}: решение </span>
          <span class="pt-2 text-xs text-gray-500">
            <!-- {{ item.submissionTime }} -->
            ID: {{ item.id }}
          </span>
        </div>

        <div class="flex-auto" />
        <div class="grid grid-cols-4 gap-4 mr-8">
          <p>Время</p>
          <p>Память</p>
          <p>Язык</p>
          <p>Результат</p>
          <p>{{ submissionEntity.usedTime }}</p>
          <p>{{ submissionEntity.usedMemory }}</p>
          <p>{{ submissionEntity.language }}</p>
          <p>{{ submissionEntity.status }}</p>
        </div>

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 transition-transform duration-200 transform ms-auto"
            :class="[open && 'rotate-90']"
          />
        </template>
      </UButton>
    </template>
    <template #item="{ item }">
      <div class="px-4 py-2">
        <p class="pl-3 text-gray-900 dark:text-white">Исходный код:</p>
        <p class="pt-2 pl-3 text-xs text-gray-500 dark:text-white" style="white-space: pre-line;">
          {{ item.code }}
        </p>
        <div class="pt-4 mx-3">
          <UButton
            class="px-4 py-2"
            variant="outline"
            @click="copyToClipboard(item.code)"
          >
            Скопировать код
          </UButton>
          <!-- <span class="pl-3">
            <UButton class="px-4 py-2" variant="outline">
              Перейти к условиям
            </UButton>
          </span> -->
        </div>
      </div>
    </template>
  </UAccordion>
</div>
</template>

<script setup lang="ts">
  import { defineProps } from "vue"
  import type { SubmissionEntity } from "~/entities/submission"

  type Props = {
    submissionEntity: SubmissionEntity
    isVisible: boolean
  }

  defineProps<Props>()

  // use toast
  const toast = useToast()

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // show toast
    toast.add({
      title: "Скопировали в буфер обмена!",
      icon: "i-heroicons-clipboard",
    })
  }
</script>

<style scoped>
  .table th,
  .table td {
    border-right: none !important;
  }
</style>
