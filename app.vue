<template>
  <div class="px-6 h-screen flex flex-col">
    <Header />
    
    <NuxtLayout class="h-full">
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
