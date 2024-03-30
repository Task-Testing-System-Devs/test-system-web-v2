type ProblemEntity = {
  id: number
  title: string

  restrictions: {
    memory: number
    time: number
    input: string
    output: string
  }

  statement: string

  inputFormat: string
  outputFormat: string

  // testSamples: Array<{
  //   input: string
  //   output: string
  // }>
  testSamples: Array<File>
}

export type { ProblemEntity }
