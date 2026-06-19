import { computed, ref } from 'vue'
import figuresData from '@/data/figures.json'

const allFigures = ref(figuresData)

export function useFigures() {
  const getFigureById = (id) => {
    return computed(() =>
      allFigures.value.find((f) => f.id === id) || null
    )
  }

  const getFiguresBySeries = (seriesSlug) => {
    return computed(() =>
      allFigures.value.filter((f) => f.series === seriesSlug)
    )
  }

  const getTrendingFigures = (limit = 8) => {
    return computed(() =>
      [...allFigures.value]
        .sort((a, b) => b.trendingScore - a.trendingScore)
        .slice(0, limit)
    )
  }

  const getRelatedFigures = (currentId, seriesSlug, limit = 4) => {
    return computed(() =>
      allFigures.value
        .filter((f) => f.series === seriesSlug && f.id !== currentId)
        .slice(0, limit)
    )
  }

  const getFiguresByIds = (ids) => {
    return computed(() =>
      ids
        .map((id) => allFigures.value.find((f) => f.id === id))
        .filter(Boolean)
    )
  }

  const getSecretFigures = () => {
    return computed(() =>
      allFigures.value.filter((f) => f.isSecret)
    )
  }

  const getFigureCount = () => {
    return computed(() => allFigures.value.length)
  }

  const getSecretCount = () => {
    return computed(() => allFigures.value.filter((f) => f.isSecret).length)
  }

  return {
    allFigures,
    getFigureById,
    getFiguresBySeries,
    getTrendingFigures,
    getRelatedFigures,
    getFiguresByIds,
    getSecretFigures,
    getFigureCount,
    getSecretCount,
  }
}
