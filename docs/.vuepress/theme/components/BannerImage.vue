<template>
  <div id="slider">
    <img :src="item" v-for="item in mixImage" :key="item" />
  </div>
</template>
<script>
export default {
  props: ['mixImage', 'ImageHight', 'isBgImagetrigger', 'bgImageSec'],
  mounted() {
    this.$nextTick(() => {
      window.f = new flux.slider('#slider', { autoplay: this.isBgImagetrigger, pagination: false, width: '100%', height: this.ImageHight, delay: this.bgImageSec })
    })
  }
}
</script>
<style scoped>
#slider {
  width: 100%;
  position: absolute;
  z-index: -20;
  top: 0px;
}
</style>
