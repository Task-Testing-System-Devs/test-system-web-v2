import type { ProblemEntity } from "~/entities/problem"

export const useProblemStore = defineStore("problem", () => {
  const sampleProblem: ProblemEntity = {
    id: 0,
    title: "A. Addition Problem",
    restrictions: {
      memory: 512, // in megabytes
      time: 2000, // in milliseconds
      input: "input.txt",
      output: "output.txt",
    },
    statement:
      "Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче для работы с входными и выходными данными вы можете использовать и файлы и потоки на ваше усмотрение.",
    inputFormat:
      "Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче для работы с входными и выходными данными вы можете использовать и файлы и потоки на ваше усмотрение.",
    outputFormat: "В единственной строке выхода выведите сумму чисел A + B",
    testSamples: [],
  }
  const sampleProblem1: ProblemEntity = {
    id: 1,
    title: "B. Addition Problem",
    restrictions: {
      memory: 512, // in megabytes
      time: 2000, // in milliseconds
      input: "input.txt",
      output: "output.txt",
    },
    statement:
      "Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче для работы с входными и выходными данными вы можете использовать и файлы и потоки на ваше усмотрение.",
    inputFormat:
      "Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче для работы с входными и выходными данными вы можете использовать и файлы и потоки на ваше усмотрение.",
    outputFormat: "В единственной строке выхода выведите сумму чисел A + B",
    testSamples: [],
  }

  const problems = ref<ProblemEntity[]>([
    sampleProblem,
    sampleProblem,
    sampleProblem,
    sampleProblem1,
  ])

  const getProblemById = (id: string | number) =>
    problems.value.filter(p => p.id === parseInt(id.toString()))[0]

  return { problems, getProblemById }
})
