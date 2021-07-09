<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <Portfolio msg="Hello Vue 3 + TypeScript + Vite" />
  <!--<div class="app">
    <Carousel @next="next" @prev="prev">
      <CarouselSlide
        v-for="(slide, index) in slides"
        :key="slide"
        :index="index"
        :visibleSlide="visibleSlide"
      >
        <img :src="slide" />
      </CarouselSlide>
    </Carousel>
  </div>
  -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Portfolio from './components/Portfolio.vue'
import Carousel from './components/Carousel.vue'
import CarouselSlide from './components/CarouselSlide.vue'
import { ref, computed } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Portfolio,
    Carousel,
    CarouselSlide
  },
  setup () {
    const slides = ref([
      '/src/assets/20191029chipsaw.jpg',
      '/src/assets/20200708sale.jpg',
      '/src/assets/20210315sale.jpg',
      '/src/assets/20210318sale.jpg',
      '/src/assets/20210426sale.jpg',
      '/src/assets/0001_page-0001.jpg'
    ])

    // indexとイコールの変数を作成する
    const visibleSlide = ref(0)

    const slidesLength = computed(() => slides.value.length)

    // Carouselから受け取ったnext
    const next = () => {
      if (visibleSlide.value >= slidesLength.value - 1) {
        visibleSlide.value = 0
      } else {
        visibleSlide.value++
      }
    }
    // Carouselから受け取ったprev
    const prev = () => {
      if (visibleSlide.value <= 0) {
        visibleSlide.value = slidesLength.value - 1
      } else {
        visibleSlide.value--
      }
    }

    return {
      slides,
      visibleSlide,
      next,
      prev
    }
  }
})
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
