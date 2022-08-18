<template>
    <div class="w-full flex items-center justify-center" v-if="pageTotal > 10">
        <Paginate v-model="pageNumber" :page-count="pageCount" :prev-text="'上一页'" :next-text="'下一页'"
            :container-class="'pagination'" :page-class="'page-item'" :page-range="3" :margin-pages="3"
            :hide-prev-next="true">
        </Paginate>
        <div class="my-[20px] flex ml-[50px]">
            <span>跳至: <input type="text" v-model="jumpPageNumber" class="w-5 h-[20px]" /></span>
            <span>每页:
                <select v-model="pageSize" class="h-[25px]">
                    <option :value="10">10</option>
                    <option :value="15">15</option>
                    <option :value="20">20</option>
                </select>
                条</span>
            <span>共: {{ props.pageTotal }}条</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Paginate from "vuejs-paginate-next";
const props = defineProps<{
    pageTotal: number,
    pageNumber: number,
    pageSize: number
}>()
const emit = defineEmits<{
    (e: 'click', value: { page: number, pageSize: number }): void
}>()
const clickEvent = (pageNumber: number, pageSize: number) => {
    emit('click', { page: pageNumber, pageSize: pageSize })
}
const pageCount = computed(() => Math.ceil(props.pageTotal / props.pageSize))
const jumpPageNumber = ref<undefined | string>(undefined)
watch(jumpPageNumber, (newVal) => {
    if (newVal) {
        if (parseInt(newVal) > pageCount.value) {
            alert(`输入的页面不能超过：${pageCount.value}`)
        } else {
            clickEvent(parseInt(newVal), props.pageSize)
        }
    }
})
watch(() => props.pageNumber, (newVal) => {
    (newVal + "") != jumpPageNumber.value ? jumpPageNumber.value = undefined : ''
    newVal ? clickEvent(newVal, props.pageSize) : ''
})
watch(() => props.pageSize, (newVal) => {
    clickEvent(1, newVal)
})
</script>

<style lang="css">
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

.active {
    background-color: var(--c-text-accent);
}

.disabled {
    background-color: #efefef;
    cursor: not-allowed;
}
</style>