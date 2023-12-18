<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        class="text-gray-500 dark:text-gray-400 duration-200"
        :class="{
          'ml-4': level,
          'hover:text-black dark:hover:text-white': activeTocId !== link.id,
          'text-primary dark:text-primary': activeTocId === link.id
        }"
      >
        {{ link.text }}
      </NuxtLink>

      <TableOfContentsLinks
        v-if="link.children"
        :links="link.children"
        :level="level + 1"
        :active-toc-id="activeTocId"
      />
    </li>
  </ul>
</template>

<script setup lang="ts" generic="T">
withDefaults(defineProps<{
  links: T[]
  level?: number
  activeTocId?: string | null
}>(), {
  level: 0,
  activeTocId: null
})

const route = useRoute()
</script>

