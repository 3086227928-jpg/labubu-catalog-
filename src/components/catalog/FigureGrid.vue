<template>
  <div>
    <div
      v-if="figures.length > 0"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <ScrollReveal
        v-for="(figure, index) in figures"
        :key="figure.id"
        :style="{ transitionDelay: (index % 8) * 60 + 'ms' }"
      >
        <FigureCard :figure="figure" />
      </ScrollReveal>
    </div>
    <EmptyState
      v-else
      :show-action="true"
      @action="$emit('clearFilters')"
    />
  </div>
</template>

<script setup>
import FigureCard from '@/components/shared/FigureCard.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import EmptyState from '@/components/shared/EmptyState.vue'

defineProps({
  figures: { type: Array, required: true },
})

defineEmits(['clearFilters'])
</script>
