<template>
  <UVerticalNavigation
    :ui="{
      strategy: 'override',
      divide: '',
      padding: 'px-4 py-2',
    }"
    :links="links"
  >
    <template #default="{ link }">
      <span :class="{ 'text-primary': link.isActive }">
        <span class="relative group-hover:text-primary">
          {{ link.label }}
        </span>
      </span>
    </template>
  </UVerticalNavigation>
</template>

<script setup lang="ts">
  import type { ProblemEntity } from "~/entities/problem"

  type Props = {
    problemset: Array<ProblemEntity>
    contestId: number
  }
  const { problemset, contestId } = defineProps<Props>()

  const currentProblemId = parseInt(useRoute().params.problemId.toString())

  const links = ref([
    ...problemset.map((problem, index) => ({
      label: `Задача ${index + 1}`,
      to: `/contests/${contestId}/${problem.id}`,
      isActive: problem.id === currentProblemId,
    })),
  ])
</script>
