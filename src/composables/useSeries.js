import { computed, ref } from 'vue'
import seriesData from '@/data/series.json'

const seriesList = ref(seriesData)

export function useSeries() {
  const getSeriesBySlug = (slug) => {
    return computed(() =>
      seriesList.value.find((s) => s.slug === slug) || null
    )
  }

  const getFeaturedSeries = () => {
    return computed(() =>
      seriesList.value.filter((s) => s.featured)
    )
  }

  const getSeriesBySlugs = (slugs) => {
    return computed(() =>
      slugs
        .map((slug) => seriesList.value.find((s) => s.slug === slug))
        .filter(Boolean)
    )
  }

  return {
    seriesList,
    getSeriesBySlug,
    getFeaturedSeries,
    getSeriesBySlugs,
  }
}
