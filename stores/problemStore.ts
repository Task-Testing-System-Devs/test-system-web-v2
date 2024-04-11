import type { ProblemEntity } from "~/entities/problem"

export const useProblemStore = defineStore("problem", () => {
  const sampleProblem: ProblemEntity = {
    id: 0,
    title: "A. Самая простая задача",
    restrictions: {
      memory: 32,
      time: 2,
      input: "input.txt",
      output: "output.txt",
    },
    statement:
      "Просто сложите A и B. Не более того.",
    testSamples: [
      {
        input: "1 2",
        output: "3",
      },
      {
        input: "5 -15",
        output: "-10",
      }
    ],
  }
  const sampleProblem1: ProblemEntity = {
    id: 1,
    title: "B. Задача чуть посложнеее",
    restrictions: {
      memory: 32,
      time: 2,
      input: "input.txt",
      output: "output.txt",
    },
    statement:
      "Вы попали в мир удивительных задач, где все вроде как просто, но достаточно сложно. Уж точно сложнее, чем вы думали. Вам необходимо найти... сумму двух чисел А и B!!!! Удивительно, какая же сложная задача! Ведь нельзя использовать оператор сложения.",
    testSamples: [
      {
        input: "1 2",
        output: "3",
      },
      {
        input: "-22 -15",
        output: "-37",
      }
    ],
  }

  const sampleProblem2: ProblemEntity = {
    id: 2,
    title: "C. О ужас, сложная задача!",
    restrictions: {
      memory: 32,
      time: 2,
      input: "input.txt",
      output: "output.txt",
    },
    statement:
      "Вы попали в мир удивительных задач, где все вроде как просто, но достаточно сложно. Уж точно сложнее, чем вы думали. Вам необходимо найти... сумму двух чисел А и B!!!! Удивительно, какая же сложная задача! Ведь нельзя использовать оператор сложения.",
    testSamples: [
      {
        input: "1 2",
        output: "3",
      },
      {
        input: "-22 -15",
        output: "-37",
      }
    ],
  }

  const problems = ref<ProblemEntity[]>([
    sampleProblem,
    sampleProblem1,
    sampleProblem2,
  ])

  const getProblemById = (id: string | number) =>
    problems.value.filter(p => p.id === parseInt(id.toString()))[0]

  return { problems, getProblemById }
})
