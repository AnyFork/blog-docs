<template>
  <div id="slider">
    <img :src="item" v-for="item in mixImage" :key="item" />
  </div>
</template>
<script>
export default {
  props: ['mixImage'],
  mounted() {
    this.$nextTick(() => {
      window.f = new flux.slider('#slider', { autoplay: true, pagination: false, width: '100%', height: 450 })
    })
  },
  methods: {
    click(event) {
      console.log(event.target.href)
      window.f.next(event.target.hash.split('#')[1])
    }
  }
}
</script>
<style scoped>
#slider {
  width: 100%;
  height: 450px;
  position: absolute;
  z-index: -20;
  top: 0px;
}
</style>
