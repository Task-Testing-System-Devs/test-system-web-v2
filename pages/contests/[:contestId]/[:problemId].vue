<template>
  <div>
    <UNotifications />

    <!-- {{ contestId }}
    {{ problemId }} -->

    <ContestCard :contestEntity="currentContest" isInsideContest />

    <ProblemCard class="mt-8" :problemEntity="currentProblem">
      <StepNavigation
        :problemset="currentContest.problemset"
        :contestId="currentContest.id"
      />
    </ProblemCard>

    <SubmitSolutionCard
      class="mt-8"
      :problemEntity="currentProblem"
      :contestEntity="currentContest"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"

  const { contestId, problemId } = useRoute().params

  import type { ContestEntity } from "~/entities/contest"
  import type { ProblemEntity } from "~/entities/problem"

  const { getProblemById } = useProblemStore()
  const { getContestById } = useContestStore()

  const currentProblem: ProblemEntity = getProblemById(
    parseInt(problemId.toString())
  )
  const currentContest: ContestEntity = getContestById(
    parseInt(contestId.toString())
  )
</script>
