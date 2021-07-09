<template>
  <div class="wrapper">
    <p class="current">
      {{ currentText }}<span v-if="showPrompt" class="prompt">|</span>
    </p>
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
      currentText: '',
      showPrompt: false
    }
  },
  async mounted () {
    await sleep(this.textTimeout)
    this.showPrompt = true
    await sleep(600)
    for (var idx = 0; idx < this.text.length; idx++) {
      this.currentText += this.text[idx]
      await sleep(randn_bm() * 100)
    }
    this.showPrompt = false
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  font-size: 12px;
  /*display: flex;*/
  font-family: 'DotGothic16', sans-serif;
}
@keyframes prompt {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}
.prompt {
  position: absolute;
  animation: prompt 1s ease infinite;
}
</style>
