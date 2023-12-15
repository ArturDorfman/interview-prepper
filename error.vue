<template>
  <NuxtLayout name="blank">
    <section>
      <h1 class="text-4xl mb-4">Oops {{ error.statusCode }}</h1>
      <h2 class="text-xl text-secondary dark:text-secondary">{{ error.statusMessage }}</h2>

      <button class="rounded-md border border-gray-400 px-4 py-2 mt-6 hover:bg-gray-200 dark:hover:text-gray-900 duration-200">
        <NuxtLink to="/">Go home</NuxtLink>
      </button>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
interface Error {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  description: string
  data: any
}

defineProps<{
  error: Error
}>()
</script>
