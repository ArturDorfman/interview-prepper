<template>
  <aside class="sticky top-16">
    <div class="font-semibold mb-2">
      <span>Table of Contents</span>
    </div>

    <nav>
      <TableOfContentsLinks :links="links" :level="0" />
    </nav>
  </aside>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  links: T[]
}>()
</script>
