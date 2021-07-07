<template>
  <div class="carousel">
    <slot></slot>
    <button @click="prev" class="carousel__prev">＜</button>
    <button @click="next" class="carousel__next">＞</button>
  </div>
</template>

<script lang="ts">
export default {
  setup (props, context) {
    const next = () => {
      context.emit('next')
    }
    const prev = () => {
      context.emit('prev')
    }

    return {
      next,
      prev
    }
  }
}
</script>

<style lang="scss" scoped></style>
