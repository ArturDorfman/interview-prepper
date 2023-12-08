<template>
  <div class="max-w-7xl mx-auto px-6 h-screen flex flex-col">
    <Header />
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '[title]',
  description: '[description]',
  // ogTitle: '[og:title]',
  // ogDescription: '[og:description]',
  // ogImage: '[og:image]',
  // ogUrl: '[og:url]'
})

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
