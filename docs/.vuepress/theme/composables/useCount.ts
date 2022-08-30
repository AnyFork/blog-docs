import { pageviewCount } from '@waline/client/dist/pageview'
import { onMounted } from 'vue'
export const useCount = (updateFlag: boolean = true): void => {
    onMounted(() => {
        setTimeout(() => {
            pageviewCount({
                serverURL: 'https://blog-comment-h7jb2h47f-anyfork.vercel.app',
                update: updateFlag
            });
        }, 500);
    })
}