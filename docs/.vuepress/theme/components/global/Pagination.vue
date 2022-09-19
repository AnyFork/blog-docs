<template>
  <div class="w-full flex items-center justify-center flex-wrap" v-if="pageTotal > pageSize">
    <Paginate v-model="pageNumber" :page-count="pageCount" :prev-text="!isMobile ? '上一页' : 'Pre'" :next-text="!isMobile ? '下一页' : 'Next'" :container-class="'pagination'" :page-class="'page-item'" :page-range="3" :margin-pages="3" :hide-prev-next="true"> </Paginate>
    <div class="sm:my-[20px] flex items-center sm:ml-[50px] leading-[25px]" :style="isMobile ? { fontSize: '10px' } : ''">
      <div class="h-full pr-[5px]">跳至: <input type="text" v-model="jumpPageNumber" class="w-5 h-[15px]" /></div>
      <div class="h-full pr-[5px]">
        <span>每页：</span>
        <select v-model="pageSize" class="h-[21px]">
          <option :value="10">10</option>
          <option :value="15">15</option>
          <option :value="20">20</option>
        </select>
        <span>条</span>
      </div>
      <div class="h-full pr-[5px]">共：{{ props.pageTotal }}条</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Paginate from 'vuejs-paginate-next'
import { isMobile } from '../../utils'
const props = defineProps<{
  pageTotal: number
}>()
const pageNumber = ref(1)
const pageSize = ref(10)
const emit = defineEmits<{
  (e: 'click', value: { page: number; pageSize: number }): void
}>()
const clickEvent = (pageNumber: number, pageSize: number) => {
  emit('click', { page: pageNumber, pageSize: pageSize })
}
const pageCount = computed(() => Math.ceil(props.pageTotal / pageSize.value))
const jumpPageNumber = ref<undefined | string>(undefined)
watch(jumpPageNumber, (newVal) => {
  if (newVal) {
    if (parseInt(newVal) > pageCount.value) {
      alert(`输入的页面不能超过：${pageCount.value}`)
    } else {
      clickEvent(parseInt(newVal), pageSize.value)
    }
  }
})
watch(pageNumber, (newVal) => {
  newVal + '' != jumpPageNumber.value ? (jumpPageNumber.value = undefined) : ''
  newVal ? clickEvent(newVal, pageSize.value) : ''
})
watch(pageSize, (newVal) => {
  clickEvent(1, newVal)
})
</script>

<style lang="css">
@media (min-width: 640px) {
  .pagination {
    display: inline-flex;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
    list-style: none;
    justify-content: center;
    line-height: inherit;
  }

  .page-item {
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(175, 174, 174);
    padding: 5px 8px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 5px;
  }

  .page-link {
    color: var(--c-text) !important;
    padding: 0px 5px;
    outline: none;
  }
}
@media (max-width: 640px) {
  .pagination {
    display: inline-flex;
    padding-left: 0;
    border-radius: 4px;
    list-style: none;
    justify-content: center;
    line-height: inherit;
  }

  .page-item {
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(175, 174, 174);
    border-radius: 4px;
    cursor: pointer;
    margin-left: 5px;
    font-size: 10px;
    padding: 5px;
  }

  .page-link {
    color: var(--c-text) !important;
    padding: 0px 5px;
    outline: none;
  }
}
.active {
  background-color: var(--c-text-accent);
}

.disabled {
  background-color: #efefef;
  cursor: not-allowed;
}
</style>
