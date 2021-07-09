<template>
  <div class="shutter">
    <div class="startword">
      <p>POTFOLIO START</p>
    </div>
  </div>
  <section class="container">
    <main>
      <div class="bgStack">
        <div class="bgStack1"></div>
        <div class="bgStack2"></div>
      </div>
      <!--<button @click="counter++" id="counter">Counter: {{ counter }}</button>-->
      <div class="prof delayUp">
        <div class="face">
          <img :src="imgProf" alt="顔写真" width="150px" />
        </div>
        <div class="name">
          <p>
            <TypeWriterText :text="'平林　彰史'" :textTimeout="3200" />
          </p>
          <p>
            <TypeWriterText
              :text="'1983年6月24日、東京都の小平市に生まれる。'"
              :textTimeout="6400"
            />
          </p>
          <p>
            <TypeWriterText
              :text="'趣味はお菓子作り、ゲーム。'"
              :textTimeout="8400"
            />
          </p>
          <p>
            <TypeWriterText
              :text="
                '高校卒業後、ファッションデザイナーを目指すが挫折。しかしグラフィックの面白さに目覚め現在に至る。'
              "
              :textTimeout="10400"
            />
          </p>
        </div>
      </div>
      <div class="approved">
        ※掲載許諾済
      </div>

      <div class="img delayAppear">
        <Works />
      </div>
    </main>
  </section>
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
export default {
  name: 'Portfolio',
  components: {
    TypeWriterText,
    Works
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
      default: './assets/face.png.jpg'
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
  background: orange;
  height: 100vh;
}
.bgStack {
  display: block;
}
.bgStack1 {
  background: #fff;
  opacity: 0.3;
  width: 100vw;
  height: 100vh;
  transform: rotate(0deg);
  transition: 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: anime4;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}
@keyframes anime4 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-4deg);
  }
}

.bgStack2 {
  background: #fff;
  opacity: 0.3;
  width: 100vw;
  height: 100vh;
  transform: rotate(0deg);
  transition: 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: anime5;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}
@keyframes anime5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-8deg);
  }
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

.content {
  animation: contentScale 2.6s forwards;
}
.approved {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #aaa;
  text-align: right;
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

@keyframes contentScale {
  70% {
    transform: perspective(800px) scale(0.9) rotateX(15deg);
  }
  100% {
    transform: perspective(800px) scale(1) rotateX(0);
  }
}

.startword {
  width: 350px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: #1e1e1e;
  border: 1px solid #fff;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 36px;
}
/*.startword p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}*/
header {
  position: sticky;
  top: 0;
  background-color: #fff;
  margin-bottom: 20px;
}
h1 {
  color: #000;
  font-size: 36px;
  font-weight: bold;
  border: none;
  text-align: center;
}
.prof {
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 50px;
}
.face {
  text-align: center;
  margin: 0 auto;
  /*margin-right: 20px;*/
}
.arrows {
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}
.carousel {
  position: relative;
  transform-style: preserve-3d;
  animation: anime1 20s linear infinite;
  height: 140px;
  width: 70vw;
  margin: auto;
  transition: 0.5s ease;

  &.carouselprev0 {
    transform: rotateY(0deg);
  }
  &.carouselprev1 {
    transform: rotateY(60deg);
  }
  &.carouselprev2 {
    transform: rotateY(120deg);
  }
  &.carouselprev3 {
    transform: rotateY(180deg);
  }
  &.carouselprev4 {
    transform: rotateY(240deg);
  }
  &.carouselprev5 {
    transform: rotateY(300deg);
  }
  &.carouselprev-1 {
    transform: rotateY(-60deg);
  }
  &.carouselprev-2 {
    transform: rotateY(-120deg);
  }
  &.carouselprev-3 {
    transform: rotateY(-180deg);
  }
  &.carouselprev-4 {
    transform: rotateY(-240deg);
  }
  &.carouselprev-5 {
    transform: rotateY(-300deg);
  }
}
.carousel:hover {
  animation-play-state: paused;
}
ul li a:hover {
  opacity: 0.8;
}
ul li {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  backface-visibility: hidden;
  height: 140px;
  width: 30vw;
}
ul li:nth-child(1) {
  transform: translate3d(-25%, 0, 108.25px) rotateY(-60deg);
}
ul li:nth-child(2) {
  transform: translate3d(50%, 0, 216.5px);
}
ul li:nth-child(3) {
  transform: translate3d(125%, 0, 108.25px) rotateY(60deg);
}
ul li:nth-child(4) {
  transform: translate3d(125%, 0, -108.25px) rotateY(-240deg);
}
ul li:nth-child(5) {
  transform: translate3d(50%, 0, -216.5px) rotateY(180deg);
}
ul li:nth-child(6) {
  transform: translate3d(-25%, 0, -108.25px) rotateY(240deg);
}
ul li img {
  display: block;
  font: 60px / 1 'arial';
  padding: 20px 0 0 20px;
  text-align: left;
  width: 250px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}
.bigimg {
  position: absolute;
  height: 80vh;
  max-width: 800px;
  top: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.modal .bigimg img {
  height: 85vh;
  max-width: 100%;
  vertical-align: baseline;
}
.close-btn {
  color: #fff;
  font-size: 40px;
  position: absolute;
  right: 20px;
  top: 0;
}
.close-btn a {
  color: #fff;
  text-decoration: none;
}
.close-btn a:hover {
  color: #fff;
  text-decoration: none;
}

@media screen and (min-width: 481px) {
  header {
    position: sticky;
    top: 0;
    background-color: #fff;
    margin-bottom: 20px;
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
  .face {
    margin-right: 20px;
    margin-left: 0px;
  }
  .face img {
    width: 124px;
  }
  .name {
    text-align: left;
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
