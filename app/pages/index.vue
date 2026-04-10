<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <div class="flex-1 flex items-center justify-center p-4 sm:p-6">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-12">TCG collage</h1>

      <div class="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center">
        <div class="flex flex-col items-center border-2 border-white rounded-xl p-6">
          <NuxtLink to="/collage-magic" class="w-32 h-32 sm:w-48 sm:h-48 mb-4">
            <img src="/magic-logo.png" alt="Magic" class="w-full h-full object-contain" />
          </NuxtLink>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/collage-magic" class="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 border border-white">{{ t('collage') }}</NuxtLink>
          </div>
        </div>

        <div class="flex flex-col items-center border-2 border-white rounded-xl p-6">
          <NuxtLink to="/collage-pokemon" class="w-32 h-32 sm:w-48 sm:h-48 mb-4">
            <img src="/pokemon-logo.png" alt="Pokémon" class="w-full h-full object-contain" />
          </NuxtLink>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/collage-pokemon" class="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 border border-white">{{ t('collage') }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
