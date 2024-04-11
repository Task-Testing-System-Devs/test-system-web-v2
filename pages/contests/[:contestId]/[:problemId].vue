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

    <SubmissionRecord class="mt-8" :submissionEntity="submissionEntity" :isVisible="isSubmissionVisible"/>

    <SubmitSolutionCard
      class="mt-8"
      :problemEntity="currentProblem"
      :contestEntity="currentContest"
      @show-submission="isSubmissionVisible = true"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"

  const { contestId, problemId } = useRoute().params

  import type { ContestEntity } from "~/entities/contest"
  import type { ProblemEntity } from "~/entities/problem"
  import type { SubmissionEntity } from "~/entities/submission";

  const { getProblemById } = useProblemStore()
  const { getContestById } = useContestStore()

  const currentProblem: ProblemEntity = getProblemById(
    parseInt(problemId.toString())
  )
  const currentContest: ContestEntity = getContestById(
    parseInt(contestId.toString())
  )

  const isSubmissionVisible = ref(false)

  const submissionEntity : SubmissionEntity = {
    id: 5,
    code: "#include <iostream>\nusing namespace std;\n\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a + b;\nreturn 0;\n}",
    language: "C++",
    status: "OK",
    errorTest: "N/A",
    taskName: "B. Очень сложная задача",
    contestName: "4. Ну... тестовый контест",
    usedTime: 0.04,
    usedMemory: 2.3,
  }
</script>
