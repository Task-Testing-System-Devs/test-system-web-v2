import type { ProblemEntity } from "./problem"

type ContestEntity = {
  id: number
  title: string
  description: string
  difficulty: string
  availableLanguages: string[]
  problemset: Array<ProblemEntity> // problemы
}

export type { ContestEntity }
