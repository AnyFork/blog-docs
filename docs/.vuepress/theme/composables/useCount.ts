import { pageviewCount } from '@waline/client/dist/pageview'
import { onMounted } from 'vue'
export const useCount = (updateFlag: boolean = true): void => {
    onMounted(() => {
        setTimeout(() => {
            pageviewCount({
                serverURL: 'https://blog-comment-g01ppb2pa-anyfork.vercel.app',
                update: updateFlag
            });
        }, 500);
    })
}