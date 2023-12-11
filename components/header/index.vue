<template>
  <header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0">
    <div class="flex justify-between items-center h-16">
      <HeaderLogo />
      <HeaderMenu />
  
      <ClientOnly>
        <ColorModeToggler />
      </ClientOnly>
    </div>
  </header>
</template>
