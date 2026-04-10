<script setup lang="ts">
const { public: { version } } = useRuntimeConfig()
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-white">
    <main class="flex-1 flex flex-col">
      <NuxtPage />
    </main>
    <footer class="text-center text-xs text-gray-600 py-3 border-t border-gray-800 space-y-1">
      <p>tcg-collage v{{ version }}</p>
      <p>
        Si ves algún problema con la web, por favor infórmalo en
        <a
          href="https://github.com/roberfg/webapp-tcg-nuxt/issues"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white underline"
        >GitHub Issues</a>.
        ¡Gracias!
      </p>
    </footer>
  </div>
</template>
