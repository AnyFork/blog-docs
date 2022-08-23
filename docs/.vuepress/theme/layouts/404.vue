<template></template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
    const dom = document.createElement('script')
    dom.setAttribute('src', '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js')
    document.body.append(dom)
})
</script>
