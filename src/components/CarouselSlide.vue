<template>
  <div v-show="visibleSlide === index" class="carousel-slide">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: ['visibleSlide', 'index']
}
</script>

<style lang="scss" scoped></style>
