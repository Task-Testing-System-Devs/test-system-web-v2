import type { ContestEntity } from "~/entities/contest"

export const useContestStore = defineStore("contest", () => {
  // take problems from problemStore pinia state
  const problemset = useProblemStore().problems

  const contests = ref<ContestEntity[]>([
    {
      id: 1,
      title: "1. Тестовый контест",
      difficulty: "1/5",
      availableLanguages: ["C", "C++", "C#", "Dart", "Java", "Kotlin", "Python 3", "Ruby", "Swift"],
      description: "",
      problemset: problemset,
    },
    {
      id: 2,
      title: "2. Ещё один тестовый контест",
      difficulty: "1/5",
      availableLanguages: ["C", "C++", "C#", "Dart", "Java", "Kotlin", "Python 3", "Ruby", "Swift"],
      description: "",
      problemset: problemset,
    },
    {
      id: 3,
      title: "3. Сложный тестовый контест",
      difficulty: "4/5",
      availableLanguages: ["C", "C++", "C#", "Dart", "Java", "Kotlin", "Python 3", "Ruby", "Swift"],
      description: "",
      problemset: problemset,
    },
    {
      id: 4,
      title: "4. Ну... тестовый контест",
      difficulty: "3/5",
      availableLanguages: ["C", "C++", "C#", "Dart", "Java", "Kotlin", "Python 3", "Ruby", "Swift"],
      description: "",
      problemset: problemset,
    },
  ])

  const getContestById = (id: string | number) =>
    contests.value.filter(contest => contest.id === parseInt(id.toString()))[0]

  return { contests, getContestById }
})
