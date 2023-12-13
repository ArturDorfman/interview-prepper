<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ 'ml-4': level }"
      >
        {{ link.text }}
      </NuxtLink>
      <TableOfContentsLinks v-if="link.children" :links="link.children" :level="level + 1" />
    </li>
  </ul>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  links: T[]
  level?: number
}>()

const route = useRoute()
</script>

