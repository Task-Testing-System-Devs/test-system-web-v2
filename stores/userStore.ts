import { defineStore } from "pinia"
import type { UserEntity } from "~/entities/user"

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
      if (newKey === "department") {
        newObj["departmentName"] = convertKeysToCamelCase(obj[key]);
      } else if (newKey === "group") {
        newObj["groupName"] = convertKeysToCamelCase(obj[key]);
      } else {
        newObj[newKey] = convertKeysToCamelCase(obj[key]);
      }
    });
    return newObj as T;
  }
  return obj as T;
}

const defaultUserEntity: UserEntity = {
  id: 0,
  email: '',
  role: '',
  firstName: '',
  lastName: '',
  middleName: '',
  departmentName: '',
  groupName: '',
};

export const useUserStore = defineStore("user", () => {
  const apiStore = useApiStore()

  const userEntity  = ref<UserEntity>(defaultUserEntity)

  onMounted(async () => {
    await getProfileInfo()
  })

  async function getProfileInfo() {
    const user = await apiStore.getProfileInfo()
    userEntity.value = convertKeysToCamelCase<UserEntity>(user)
  }

  return {
    userEntity,
    getProfileInfo,
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }
