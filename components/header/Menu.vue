<template>
  <ul class="flex gap-3">
    <li v-for="item in menu" :key="item.id" class="text-sm dark:text-gray-400">
      <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const menu = reactive([
  { id: 1, path: '/', label: 'Home' },
  { id: 2, path: '/theory/markup', label: 'Theory' },
  { id: 3, path: '/coding/first', label: 'Coding' },
])
</script>