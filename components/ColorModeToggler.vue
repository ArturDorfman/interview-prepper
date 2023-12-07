<template>
  <button @click="toggleMode">
    <nuxt-icon :name="`color-mode/${nextMode}`" />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const modes = ['system', 'light', 'dark']

const nextMode = computed(() => {
  const currentIndex = modes.indexOf(colorMode.preference)
  return currentIndex + 1 === modes.length
    ? modes[0]
    : modes[currentIndex + 1]
})

const toggleMode = () => colorMode.preference = nextMode.value
</script>