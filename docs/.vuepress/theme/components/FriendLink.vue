<template>
  <div class="friend-link-wrapper">
    <a class="friend-link-item" v-for="(item, index) in dataAddColor" :key="index" :href="item.link" target="_blank">
      <span class="list-style" :style="{ backgroundColor: item.color }"> </span>
      {{ item.title }}
    </a>
  </div>
</template>

<script>
import { defineComponent,computed} from 'vue'
import { getOneColor } from '@theme/helpers/other'
import { useInstance } from '@theme/helpers/composable'
export default defineComponent({
  setup(props, ctx) {
    const instance = useInstance()
    const dataAddColor = computed(() => {
      const { friendLink = [] } = instance && instance.$themeConfig
      return friendLink.map((item) => {
        item.color = getOneColor()
        return item
      })
    })
    return { dataAddColor }
  }
})
</script>

<style lang="stylus" scoped>
.friend-link-wrapper
  position relative
  margin 15px 0
  .friend-link-item
    position relative
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px 4px 20px;
    line-height 20px
    display: inline-block;
    cursor: default;
    border-radius: $borderRadius
    font-size: 13px;
    box-shadow var(--box-shadow)
    transition: all .5s
    cursor: pointer
    .list-style
      position absolute
      left .4rem
      top 0
      bottom 0
      margin auto
      display block
      width .4rem
      height .4rem
      border-radius .1rem
      background $accentColor
      content ''
</style>
