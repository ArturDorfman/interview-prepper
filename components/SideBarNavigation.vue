<template>
  <section class="sticky top-16">
    <ul>
      <li
        v-for="navItem in navList"
        :key="navItem._path"
        :class="{ 'text-primary': navItem._path === route.path }"
      >
        <NuxtLink :to="navItem._path">{{ navItem.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const navList = computed(() => (navigation.value || [])[0].children)
</script>
