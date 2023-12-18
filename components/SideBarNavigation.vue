<template>
  <section class="sticky top-16">
    <ul>
      <li v-for="navItem in navList" :key="navItem._path">
        <NuxtLink
          :to="navItem._path"
          class="text-gray-500 dark:text-gray-400 duration-200"
          :class="{
            'hover:text-black dark:hover:text-white': navItem._path !== route.path,
            'text-primary dark:text-primary': navItem._path === route.path
          }"
        >
          {{ navItem.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const navList = computed(() => (navigation.value || [])[0].children)
</script>
