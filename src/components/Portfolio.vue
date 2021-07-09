<template>
  <div class="shutter">
    <div class="startword">
      <p>POTFOLIO START</p>
    </div>
  </div>
  <div class="bgImg">
    <div class="bgImg2"></div>
    <section class="container">
      <main>
        <!--<button @click="counter++" id="counter">Counter: {{ counter }}</button>-->
        <div class="prof delayUp">
          <Profile />
        </div>

        <div class="img delayAppear">
          <Works />
        </div>

        <div class="approved">
          ※掲載許諾済
        </div>
      </main>
    </section>
  </div>
</template>

<script lang="ts">
function sleepW (timeout: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

import TypeWriterText from './TypeWriterText.vue'
import Works from './Works.vue'
import Profile from './Profile.vue'
export default {
  name: 'Portfolio',
  components: {
    TypeWriterText,
    Works,
    Profile
  },
  props: {
    imgurls: {
      type: Array,
      default: [
        '/src/assets/20210426sale.jpg',
        '/src/assets/0001_page-0001.jpg',
        '/src/assets/20191029chipsaw.jpg',
        '/src/assets/20200708sale.jpg',
        '/src/assets/20210315sale.jpg',
        '/src/assets/20210318sale.jpg'
      ]
    },
    imgProf: {
      type: String,
      default: './assets/face.png'
    },
    msg: {
      type: String,
      required: true
    },
    worksTimeout: {
      type: Number,
      default: 15000
    }
  },
  data () {
    return {
      currentimgurl: '/src/assets/20210426sale.jpg',
      counter: 0,
      modalvisible: false,
      isPrev: 360 / this.imgurls.length,
      carouselIdx: 0,
      showImg: false
    }
  },
  methods: {
    showModal (imgurl: string) {
      this.currentimgurl = imgurl
      this.modalvisible = true
    },
    hidemodal () {
      this.modalvisible = false
    }
  },
  async mounted () {
    await sleepW(this.worksTimeout)
    this.showImg = true
  }
}
</script>

<style lang="scss" scoped>
$bg_color: #fafafa;
$font_color: #333;
main {
  display: block;
  height: 100vh;
}
.shutter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  background-color: #1e1e1e;
  z-index: 9999;
  animation: byeShutter 2.6s forwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-color: #f3f3f3;
    width: 0;
    height: 1px;
    animation: shutterOpen 2.6s forwards;
  }
}
@keyframes byeShutter {
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}

@keyframes shutterOpen {
  0% {
    width: 0;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  90% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}
.bgImg {
  background: orange;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: 50%;
  position: relative;
  &::before {
    content: '';
    background-color: #fff;
    opacity: 0.3;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    animation-name: anime4;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    pointer-events: none;
  }
}
@keyframes anime4 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-4deg);
  }
}
.bgImg2 {
  background-color: #fff;
  opacity: 0.3;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  animation-name: anime5;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  pointer-events: none;
}
@keyframes anime5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
.content {
  animation: contentScale 2.6s forwards;
}
.approved {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  text-align: right;
  opacity: 0.8;
}
@keyframes contentScale {
  70% {
    transform: perspective(800px) scale(0.9) rotateX(15deg);
  }
  100% {
    transform: perspective(800px) scale(1) rotateX(0);
  }
}

.startword {
  width: 100vw;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: #1e1e1e;
  border: 1px solid #fff;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  color: #000;
  font-size: 36px;
  font-weight: bold;
  border: none;
  text-align: left;
  margin: 0 auto;
}
.delayUp {
  animation-name: anime2;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 15s;
  animation-fill-mode: forwards;
}
@keyframes anime2 {
  0% {
    top: 50%;
  }
  100% {
    top: 13%;
  }
}
.prof {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  max-width: 300px;
  width: 86vw;
  margin: 0 auto;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  border: 3px solid #808080;
  box-shadow: 3px 3px 0 0 rgb(255 255 255 / 75%);
  transform: translate(-50%, -50%);
}
.delayAppear {
  animation-name: anime3;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 18s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes anime3 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 481px) {
  //レスポンシブ
  h1 {
    color: #000;
    font-size: 36px;
    font-weight: bold;
    border: none;
    text-align: left;
    margin: 0 auto;
  }
  .delayUp {
    animation-name: anime2;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-delay: 15s;
    animation-fill-mode: forwards;
  }
  @keyframes anime2 {
    0% {
      top: 50%;
    }
    100% {
      top: 18%;
    }
  }
  .prof {
    position: absolute;
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    max-width: 700px;
    width: 53vw;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    border: 3px solid #808080;
    box-shadow: 3px 3px 0 0 rgb(255 255 255 / 75%);
  }
  .delayAppear {
    animation-name: anime3;
    animation-duration: 3s;
    animation-timing-function: ease;
    /*animation-iteration-count: 1;*/
    animation-delay: 18s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  @keyframes anime3 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
