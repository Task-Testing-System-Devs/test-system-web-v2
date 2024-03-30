<template>
  <UNotifications />

  <h1 class="text-2xl">Ваши решения</h1>
  <div v-for="s in submissions">
    <SubmissionRecord class="mt-4" :submissionEntity="s" />
  </div>
</template>

<script setup lang="ts">
  import type { SubmissionEntity } from "~/entities/submission"

  const submissions = useSubmissionStore().submissions
</script>
