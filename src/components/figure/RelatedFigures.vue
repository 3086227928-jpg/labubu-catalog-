<template>
  <div v-if="related.length > 0">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-display font-bold text-text-primary">
        同系列推荐
      </h3>
      <router-link
        :to="`/catalog?series=${seriesSlug}`"
        class="text-sm text-pink-300 hover:text-pink-200 transition-colors font-display font-semibold"
      >
        查看全部 →
      </router-link>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <FigureCard v-for="f in related" :key="f.id" :figure="f" />
    </div>
  </div>
</template>

<script setup>
import FigureCard from '@/components/shared/FigureCard.vue'

defineProps({
  related: { type: Array, required: true },
  seriesSlug: { type: String, required: true },
})
</script>
