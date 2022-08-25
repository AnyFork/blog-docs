import { ref } from 'vue'
const loading = ref(false)
export const useLoading = () => {
    const showLoading = () => loading.value = true
    const hiddenLoading = () => loading.value = false
    return { showLoading, hiddenLoading, loading }
}