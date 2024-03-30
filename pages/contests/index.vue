<template>
  <div v-for="s in contests">
    <ContestCard class="mt-4" :contestEntity="s" />
  </div>
</template>

<script setup lang="ts">
  const contests = useContestStore().contests
</script>
