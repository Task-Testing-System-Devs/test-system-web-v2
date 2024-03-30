<template>
  <UNotifications />

  <UForm :state="formState" :schema="schema" @submit="onSubmit">
    <UFormGroup class="mb-4" label="Почта" name="email">
      <UInput
        v-model="formState.email"
        placeholder="Введите вашу почту"
        color="gray"
        icon="i-heroicons-envelope"
        inputClass="py-4"
        required
      />
    </UFormGroup>

    <UFormGroup class="mb-6" label="Пароль" name="password">
      <UInput
        v-model="formState.password"
        type="password"
        placeholder="Пароль от 6 символов"
        color="gray"
        icon="i-heroicons-lock-closed"
        inputClass="py-4"
        required
      />
    </UFormGroup>

    <UButton :loading="isLoading" type="submit" class="justify-center w-full">
      <span class="py-3">Войти</span>
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import { object, string, type InferType } from "yup"

  const isLoading = ref(false)

  const schema = object({
    email: string()
      .email("Почта введена неверно")
      .required("Обязательное поле"),
    password: string()
      .min(6, "Пароль от 6 символов")
      .required("Обязательное поле"),
  })
  type Schema = InferType<typeof schema>

  const formState = reactive({
    email: undefined,
    password: undefined,
  })

  const apiStore = useApiStore()
  const router = useRouter()
  const toast = useToast()

  async function onSubmit(event: any) {
    const { email, password } = event.data
    isLoading.value = true
    console.log(email, password)
    // send to backend to log in
    const res = await apiStore.login({ email, password })
    if (res.token) {
      router.push("/contests")
    } else {
      // show error toast
      console.log("Error")
      toast.add({
        title: "Ошибка доступа: проверьте введенные данные",
        icon: "i-heroicons-x-mark",
      })
    }
    isLoading.value = false
  }
</script>
