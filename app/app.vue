<script setup lang="ts">
const { public: { version } } = useRuntimeConfig()
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-white">
    <main class="flex-1 flex flex-col">
      <NuxtPage />
    </main>
    <footer class="text-center text-xs text-gray-600 py-3 border-t border-gray-800">
      tcg-collage v{{ version }}
    </footer>
  </div>
</template>
