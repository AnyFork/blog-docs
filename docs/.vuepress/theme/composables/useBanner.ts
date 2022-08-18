const modules = import.meta.glob("../../public/images/index/*.jpg");
import { usePageFrontmatter, PageFrontmatterRef, withBase } from "@vuepress/client";
import { onMounted, onUnmounted } from 'vue';
export const useBanner = () => {
    const frontmatter = usePageFrontmatter() as PageFrontmatterRef<Blog.Home>;
    let fx: any
    const {
        bgImage,
        bgImageSec = 4000,
        isBgImagetrigger = true,
        needDefaultImages = true,
        heroText,
        tagline,
        bgImageStyle = { height: '550px', color: '#fff' },
        showArrow = true,
        bubbles = true,
    } = frontmatter.value;
    /**banner组件参数 */
    const bannerOptions = {
        bgImageSec,
        isBgImagetrigger,
        showArrow,
        tagline,
        heroText,
        bgImageStyle,
        bubbles
    };
    /**获取指定文件夹下面的图片 */
    const getPublicImages = () => {
        const imageArray: Array<string> = [];
        Object.keys(modules).forEach((path) => {
            //匹配path为./xx的格式，匹配./的后面的部分名称
            const fileName = path.replace(/(.*\/)*([\s\S]*?)/gi, "$2");
            //拼接图片路径
            const filePath = withBase("/images/index/" + fileName);
            imageArray.push(filePath);
        });
        return imageArray;
    };
    /**获取图片，如果开启随机切换图片，返回全部，否则返回一个 */
    const getRandomImage = (): Array<string> | string => {
        //和默认图片一起混用，图片合并，反之只使用外部配置图片
        const imageArray = needDefaultImages
            ? mixImage(bgImage)
            : (bgImage as Array<string>);
        //判断是否开启自动更换，不开启，每次刷新更换
        return isBgImagetrigger
            ? imageArray
            : imageArray[Math.floor(Math.random() * imageArray.length)];
    };
    /**自定义图片和默认图片合并去重*/
    const mixImage = (mixImageArray?: Array<string>) => {
        const imageArray = getPublicImages();
        //数组合并，去重
        return mixImageArray
            ? Array.from(new Set(imageArray.concat(mixImageArray)))
            : imageArray;
    };

    onMounted(() => {
        /**slider动画 */
        fx = new flux.slider("#banner", {
            autoplay: bannerOptions.isBgImagetrigger,
            pagination: false,
            width: "100%",
            height: Number(bgImageStyle.height.slice(0, -2)),
            delay: bannerOptions.bgImageSec
        });
    })
    onUnmounted(() => {
        if (fx) {
            fx = null
        }
    })
    return { getRandomImage, bannerOptions };
};
