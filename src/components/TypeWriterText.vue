<template>
  <div class="wrapper">
    <p class="current">{{ currentText }}<span class="prompt">|</span></p>
  </div>
</template>

<script lang="ts">
function randn_bm (): number {
  let u = 0,
    v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  num = num / 10.0 + 0.5
  if (num > 1 || num < 0) return randn_bm()
  return num
}
function sleep (timeout: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}
export default {
  props: {
    text: {
      type: String,
      default: '平林　彰史'
    },
    textTimeout: {
      type: Number,
      default: 3200
    }
  },
  data () {
    return {
      currentText: ''
    }
  },
  async mounted () {
    await sleep(this.textTimeout)
    for (var idx = 0; idx < this.text.length; idx++) {
      this.currentText += this.text[idx]
      await sleep(randn_bm() * 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
</style>
