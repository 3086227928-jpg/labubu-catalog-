<template>
  <div class="relative">
    <svg
      class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input
      :value="modelValue"
      type="text"
      :placeholder="placeholder"
      class="w-full pl-10 pr-4 py-2.5 bg-dark-800 border border-dark-600 rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-pink-400/50 focus:shadow-glow-pink transition-all duration-300"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button
      v-if="modelValue"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
      @click="$emit('update:modelValue', '')"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '搜索玩偶...' },
})

defineEmits(['update:modelValue'])
</script>
