import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observer = ref(null)
  const visibleElements = ref(new Set())

  const observeElement = (el, threshold = 0.15) => {
    if (!el) return

    if (!observer.value) {
      observer.value = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleElements.value.add(entry.target)
              observer.value.unobserve(entry.target)
            }
          })
        },
        { threshold, rootMargin: '0px 0px -40px 0px' }
      )
    }

    observer.value.observe(el)
  }

  const isVisible = (el) => {
    return visibleElements.value.has(el)
  }

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return { observeElement, isVisible }
}
