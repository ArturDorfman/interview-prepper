<template>
  <section class="flex flex-col items-center justify-center">
    <h1 class="text-7xl">
      The <span class="text-green-500 dark:text-green-400">Interview</span> Preparation
    </h1>

    <h4 class="mt-6 text-lg dark:text-gray-400">
      This guide was designed for help successfully pass technical interview
    </h4>

    <button class="mt-10 z-10">
      <NuxtLink
          to="/guide/markup"
          class="rounded-md px-3.5 py-2.5 text-white dark:text-gray-900
        bg-green-500 hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500
          flex justify-center items-center"
      >
        <Icon class="h-6 w-6 mr-1.5" name="i-ph-rocket-launch-duotone" />
        Get started
      </NuxtLink>
    </button>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'start'
})
</script>
