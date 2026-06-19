<template>
  <div
    ref="elRef"
    :class="[
      'transition-all duration-700 ease-out',
      isRevealed
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8',
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const elRef = ref(null)
const isRevealed = ref(false)

onMounted(() => {
  if (!elRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isRevealed.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  )

  observer.observe(elRef.value)
})
</script>
