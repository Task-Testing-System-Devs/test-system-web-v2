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
      <div class="flex flex-row justify-between">
        <div class="flex flex-col flex-auto">
          <h3 class="mb-8 text-2xl">{{ problemEntity.title }}</h3>
          <div class="flex flex-row justify-between">
            <!-- <div class="flex-auto"></div> -->
            <div class="flex flex-col items-start space-y-2">
              <p class="text-gray-500">Ограничение по времени:</p>
              <p class="text-gray-500">Ограничение по памяти:</p>
              <p class="text-gray-500">Ввод:</p>
              <p class="text-gray-500">Вывод:</p>
            </div>
            <div class="flex flex-col items-end space-y-2">
              <p class="text-gray-500">
                {{ problemEntity.restrictions.time }} с
              </p>
              <p class="text-gray-500">
                {{ problemEntity.restrictions.memory }} МБ
              </p>
              <p class="text-gray-500">
                {{ problemEntity.restrictions.input }}
              </p>
              <p class="text-gray-500">
                {{ problemEntity.restrictions.output }}
              </p>
              <p class="text-gray-500 text-md"></p>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center w-1/4 pt-1 pl-16 space-y-2">
          <!-- slot for navi -->
          <slot />
        </div>
      </div>
    </template>

    <p class="text-gray-800 text-lg">{{ problemEntity.statement }}</p>
 
    <template #footer>
      <div class="mt-2">
        <h4 class="text-xl font-medium">Примеры</h4>
        <div class="mt-4" v-for="(sample, i) in problemEntity.testSamples">
          <UCard
            :ui="{
              body: {
                padding: 'py-0',
              },
            }"
          >
            
              <h4 class="text-lg">Пример #{{ i + 1 }}</h4>
            
            <div class="flex flex-row space-x-8">
              <div class="w-full mt-4">
                <h6 class="text-md">Ввод</h6>
                <UCard
                  class="mt-2 text-gray-800 bg-gray-100 text-md"
                  :ui="{
                    strategry: 'override',
                    body: {
                      padding: '',
                    },
                  }"
                >
                  <div
                    class="flex flex-row items-center justify-between px-4 py-4"
                  >
                    <p>{{ sample.input }}</p>
                    <UButton
                      variant="ghost"
                      @click="() => copyToClipboard(sample.input)"
                    >
                      <UIcon name="i-heroicons-clipboard" size="2xl" />
                    </UButton>
                  </div>
                </UCard>
              </div>
              <div class="w-full mt-4">
                <h6 class="text-md">Вывод</h6>
                <UCard
                  class="mt-2 text-gray-800 bg-gray-100 text-md"
                  :ui="{
                    strategry: 'override',
                    body: {
                      padding: '',
                    },
                  }"
                >
                  <div
                    class="flex flex-row items-center justify-between px-4 py-4"
                  >
                    <p>{{ sample.output }}</p>
                    <UButton
                      variant="ghost"
                      @click="() => copyToClipboard(sample.output)"
                    >
                      <UIcon name="i-heroicons-clipboard" size="2xl" />
                    </UButton>
                  </div>
                </UCard>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
  import type { ProblemEntity } from "~/entities/problem"

  type Props = {
    problemEntity: ProblemEntity
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
