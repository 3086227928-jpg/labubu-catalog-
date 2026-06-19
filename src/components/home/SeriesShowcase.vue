<template>
  <section class="py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
          热门系列
        </h2>
        <p class="text-text-secondary">点击系列卡片，探索每个系列的精灵</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="series in series"
          :key="series.slug"
          :to="`/catalog?series=${series.slug}`"
          class="group relative h-56 rounded-2xl overflow-hidden border border-dark-600 hover:border-pink-400/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity"
            :style="{ backgroundColor: series.color + '18' }"
          ></div>
          <!-- Content -->
          <div class="absolute inset-0 p-6 flex flex-col justify-between">
            <div>
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold mb-3"
                :style="{
                  backgroundColor: series.color + '30',
                  color: series.color,
                }"
              >
                {{ series.figureCount }} 款
                <span v-if="series.secretCount > 0"> · {{ series.secretCount }} 隐藏</span>
              </span>
              <h3 class="text-xl font-display font-bold text-text-primary group-hover:text-pink-300 transition-colors">
                {{ series.nameCN }}
              </h3>
              <p class="text-sm text-text-secondary mt-1">{{ series.nameEN }}</p>
            </div>
            <div class="flex items-center text-sm text-text-muted group-hover:text-pink-300 transition-colors">
              <span>{{ series.type === 'plush-pendant' ? '毛绒挂件' : series.type === 'large-plush' ? '大型毛绒' : '联名系列' }}</span>
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSeries } from '@/composables/useSeries.js'
import homepageData from '@/data/homepage.json'

const { getSeriesBySlugs } = useSeries()
const series = getSeriesBySlugs(homepageData.featuredSeries)
</script>
