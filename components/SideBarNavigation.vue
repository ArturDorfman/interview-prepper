<template>
  <section>
    <ul>
      <li v-for="navItem in navList" :key="navItem._path">
        <NuxtLink :to="navItem._path">{{ navItem.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const navList = computed(() => {
  let index = 0
  if (route.fullPath === '/theory/markup') index = 1
  return (navigation.value || [])[index].children
})
</script>
