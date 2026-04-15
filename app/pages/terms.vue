<script setup lang="ts">
const { t } = useLocale()

useSeoMeta({
  title: 'Términos y Condiciones — TCG Collage',
  description: 'Términos y condiciones de uso de TCG Collage, herramienta gratuita para generar collages de cartas coleccionables.',
  ogTitle: 'Términos y Condiciones — TCG Collage',
  ogDescription: 'Términos y condiciones de uso de TCG Collage.',
  ogImage: 'https://tcgcollage.com/og-image.png',
  ogUrl: 'https://tcgcollage.com/terms',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const sections = [
  { title: 'terms_s1_title', body: 'terms_s1' },
  { title: 'terms_s2_title', body: 'terms_s2' },
  { title: 'terms_s3_title', body: 'terms_s3' },
  { title: 'terms_s4_title', body: 'terms_s4' },
  { title: 'terms_s5_title', body: 'terms_s5' },
] as const
</script>

<template>
  <div class="flex-1 p-4 sm:p-6">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center gap-4 mb-8">
        <NuxtLink to="/" class="text-gray-400 hover:text-white">{{ t('home') }}</NuxtLink>
        <h1 class="text-2xl font-bold">{{ t('terms_title') }}</h1>
      </div>

      <div class="space-y-4">
        <p class="text-xs text-gray-500">{{ t('terms_last_updated') }}</p>

        <div class="bg-gray-800 rounded-xl p-6 space-y-6">
          <div
            v-for="section in sections"
            :key="section.title"
            class="border-t border-gray-700 pt-5 first:border-0 first:pt-0"
          >
            <h2 class="text-base font-semibold text-purple-400 mb-2">{{ t(section.title) }}</h2>
            <p class="text-gray-300 text-sm leading-relaxed">{{ t(section.body) }}</p>
            <a
              v-if="section.title === 'terms_s5_title'"
              href="https://discord.gg/tfZFbett"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-colors"
            >Discord ↗</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
