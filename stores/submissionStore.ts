import { defineStore } from "pinia"
import type { SubmissionEntity } from "~/entities/submission"

function snakeToCamel(s: string): string {
  return s.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

function isObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function convertKeysToCamelCase<T>(obj: unknown): T {
  if (Array.isArray(obj)) {
    return obj.map(item => convertKeysToCamelCase(item)) as unknown as T;
  }
  else if (isObject(obj)) {
    const newObj: Record<string, unknown> = {};
    Object.keys(obj).forEach((key) => {
      const newKey = snakeToCamel(key);
      newObj[newKey] = convertKeysToCamelCase(obj[key]);
    });
    return newObj as T;
  }
  return obj as T;
}

export const useSubmissionStore = defineStore("submission", () => {
  const apiStore = useApiStore()

  const submissions = ref<SubmissionEntity[]>([])

  onMounted(async () => {
    await getSubmissions()
  })

  async function getSubmissions() {
    const response = await apiStore.getSubmissions()
    submissions.value = convertKeysToCamelCase<SubmissionEntity[]>(response)
  }

  return { submissions }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }
