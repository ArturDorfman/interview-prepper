<template>
  <button @click="toggleMode">
    <Icon :name="modesIcons[nextMode]" />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const modesIcons = {
  system: 'i-ph-monitor-duotone',
  light: 'i-ph-sun',
  dark: 'i-ph-moon-duotone'
} as Record<string, string>

const nextMode = computed(() => {
  const modes = ['system', 'light', 'dark']
  const currentIndex = modes.indexOf(colorMode.preference)
  return currentIndex + 1 === modes.length
    ? modes[0]
    : modes[currentIndex + 1]
})

const toggleMode = () => colorMode.preference = nextMode.value
</script>