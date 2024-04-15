<template>
  <aside v-if="links?.length" class="sticky top-16 overflow-y-auto side-bar-scroll">
    <div class="font-semibold mb-2">
      <span>Table of Contents</span>
    </div>

    <nav>
      <TableOfContentsLinks :links="links" :active-toc-id="activeTocId"  />
    </nav>
  </aside>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  links?: T[]
}>()

const activeTocId = ref<string | null>(null)
const observer = ref<IntersectionObserver | null>(null)

function observeTocTitles () {
  observer.value = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeTocId.value = entry.target.id
      }
    })
  }, { root: null, threshold: 0.5 })

  const tocTitles = document.querySelectorAll('h2, h3')
  tocTitles.forEach((title) => observer.value?.observe((title)))
}

function stopObserveTocTitles () {
  observer.value?.disconnect()
  observer.value = null
}

onMounted(observeTocTitles)
onUnmounted(stopObserveTocTitles)
</script>
