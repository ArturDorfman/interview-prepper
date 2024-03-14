<template>
  <div class="h-screen flex flex-col">
    <Header />

    <NuxtLayout class="h-full px-8 py-3">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate:'Interview prepper - %s',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap',
      crossorigin: ''
    }
  ]
})
</script>
