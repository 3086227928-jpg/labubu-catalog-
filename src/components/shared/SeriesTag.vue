<template>
  <button
    :class="[
      'inline-flex items-center px-4 py-2 rounded-full text-sm font-display font-semibold transition-all duration-300',
      active
        ? 'bg-pink-400 text-white shadow-glow-pink'
        : 'bg-dark-700 text-text-secondary hover:bg-dark-600 hover:text-text-primary border border-dark-600',
      clickable ? 'cursor-pointer' : 'cursor-default',
    ]"
    :style="active ? {} : { '--hover-border': accentColor + '40' }"
    @click="clickable && $emit('click')"
  >
    <span
      v-if="dot"
      class="w-2 h-2 rounded-full mr-2"
      :style="{ backgroundColor: accentColor }"
    ></span>
    <slot />
  </button>
</template>

<script setup>
defineProps({
  active: { type: Boolean, default: false },
  clickable: { type: Boolean, default: false },
  dot: { type: Boolean, default: false },
  accentColor: { type: String, default: '#f472b6' },
})

defineEmits(['click'])
</script>
