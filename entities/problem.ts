type ProblemEntity = {
  id: number
  title: string

  restrictions: {
    memory: number | null
    time: number | null
    input: string
    output: string
  }

  statement: string

  testSamples: Array<{
    input: string
    output: string
  }>
  // testSamples: Array<File>
}

export type { ProblemEntity }
