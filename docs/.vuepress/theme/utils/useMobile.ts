import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
export const { width, height } = useWindowSize()
export const isMobile = computed(() => width.value < 640)