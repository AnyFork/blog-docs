<template>
  <div class="abstract-wrapper">
    <note-abstract-item
      class="border"
      v-for="(item, index) in currentPageData"
      :key="item.path"
      :item="item"
      :currentPage="currentPage"
      :winWidth="winWidth"
      :currentTag="currentTag"
      :class="index % 3 == 0 ? 'draw' : index % 3 == 1 ? 'draw meet' : 'center'"
    />
    <pagation class="pagation" :total="data.length" :currentPage="currentPage" @getCurrentPage="getCurrentPage" />
  </div>
</template>
<script>
import { defineComponent, ref, toRefs, computed, onMounted } from 'vue'
import pagination from '@theme/mixins/pagination'
import NoteAbstractItem from '@theme/components/NoteAbstractItem'
import windowsSize from '@theme/helpers/mixins/windowsSize.js'
import { useInstance } from '@theme/helpers/composable'
export default defineComponent({
  mixins: [pagination, windowsSize],
  components: { NoteAbstractItem },
  props: ['data', 'currentTag'],
  setup(props, ctx) {
    const instance = useInstance()
    const { data } = toRefs(props)
    const currentPage = ref(1)

    const currentPageData = computed(() => {
      const start = (currentPage.value - 1) * instance.$perPage
      const end = currentPage.value * instance.$perPage
      return data.value.slice(start, end)
    })
    const getCurrentPage = (page) => {
      currentPage.value = page
      instance._setStoragePage(page)
      ctx.emit('paginationChange', page)
    }

    onMounted(() => {
      currentPage.value = instance._getStoragePage() || 1
    })

    return { currentPage, currentPageData, getCurrentPage }
  },
  watch: {
    $route() {
      this.currentPage = this._getStoragePage() || 1
    }
  }
})
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
  pointer-events: auto;
</style>
