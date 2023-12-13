<template>
  <header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 lg:mb-0 lg:border-0">
    <div class="mx-auto max-w-7xl flex justify-between items-center h-16">
      <HeaderLogo />

      <ClientOnly>
        <ColorModeToggler />
      </ClientOnly>
    </div>
  </header>
</template>
