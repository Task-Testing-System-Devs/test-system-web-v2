import type { ContestEntity } from "~/entities/contest"

export const useContestStore = defineStore("contest", () => {
  // take problems from problemStore pinia state
  const problemset = useProblemStore().problems

  const contests = ref<ContestEntity[]>([
    {
      id: 10212,
      title: "Контест на закрепление материала",
      difficulty: "1/5",
      availableLanguages: ["C++", "Python", "Java"],
      description: "Время решения: 2 часа",
      problemset: problemset,
    },
    {
      id: 10213,
      title: "Контест на закрепление мате124124риала",
      difficulty: "5/5",
      availableLanguages: ["C++", "Python", "Java"],
      description: "Время решения: 2 часа",
      problemset: problemset,
    },
  ])

  const getContestById = (id: string | number) =>
    contests.value.filter(contest => contest.id === parseInt(id.toString()))[0]

  return { contests, getContestById }
})
