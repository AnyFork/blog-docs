<template>
  <div class="fixed w-full h-screen bg-[#fff] z-[100000] overflow-hidden top-0" v-show="loading">
    <LoadingPage></LoadingPage>
  </div>
</template>

<script setup lang="ts">
import { useLoading } from '../../composables'
const { loading } = useLoading()
</script>

<style scoped></style>
