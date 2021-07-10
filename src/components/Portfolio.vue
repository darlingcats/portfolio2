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

        <div class="img delayAppear">
          <div class="carouselImg">
            <figure>
              <img
                v-for="imgurl in imgurls"
                :key="imgurl"
                @click="showModal(imgurl)"
                :src="imgurl"
              />
            </figure>
            <nav>
              <button class="nav prev">
                ＜
              </button>
              <button class="nav next">
                ＞
              </button>
            </nav>
          </div>
          <div class="worksText">
            <TypeWriterText
              :text="'作品を選択してください'"
              :textTimeout="20000"
            />
          </div>
        </div>
        <div class="prof delayUp">
          <Profile />
        </div>

        <div class="approved">
          ※掲載許諾済
        </div>
      </main>
    </section>
    <transition name="fadeHoge">
      <div class="modal" v-if="modalvisible" @click.prevent="hidemodal">
        <div class="bigimg"><img :src="currentimgurl" alt="" /></div>
        <p class="close-btn"><a href="#">✖</a></p>
      </div>
    </transition>
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
        './assets/hirabayashi_works_page-0006.jpg',
        './assets/hirabayashi_works_page-0007.jpg',
        './assets/hirabayashi_works_page-0009.jpg',
        './assets/hirabayashi_works_page-0012.jpg',
        './assets/hirabayashi_works_page-0013.jpg',
        './assets/hirabayashi_works_page-0014.jpg',
        './assets/hirabayashi_works_page-0001.jpg',
        './assets/hirabayashi_works_page-0002.jpg',
        './assets/hirabayashi_works_page-0003.jpg',
        './assets/hirabayashi_works_page-0004.jpg',
        './assets/hirabayashi_works_page-0005.jpg'
      ]
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
  mounted () {
    var carousel = document.querySelector('.carouselImg')
    var figure = carousel.querySelector('figure')
    var nav = carousel.querySelector('nav')
    var numImages = figure.childElementCount
    var theta = (2 * Math.PI) / numImages
    var currImage = 0

    nav.addEventListener('click', onClick, true)

    function onClick (e) {
      e.stopPropagation()

      var t = e.target
      if (t.tagName.toUpperCase() != 'BUTTON') return

      if (t.classList.contains('next')) {
        currImage++
      } else {
        currImage--
      }

      figure.style.transform = `rotateY(${currImage * -theta}rad)`
    }
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
$n: 11; // Number of images
$item-width: 180px; // Width of an image. In the Js version this value can be a percentage
$item-separation: 10px; // The space between the images. This will decrease the effective item width
$viewer-distance: 800px;
// Derived variables
$theta: 2 * 3.141592653589793 / $n;
$apothem: 482.842712474619px; // == $item-width / (2 * tan(PI / $n))
.carouselImg {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35vh;
  perspective: $viewer-distance;
  overflow: hidden;
  > * {
    flex: 0 0 auto;
  }
  figure {
    margin: 0%;
    width: $item-width;
    transform-style: preserve-3d;
    transform-origin: 50% 50% (-$apothem);
    transition: transform 0.5s;
    transform: rotateY(/* some amount here */ rad);
    img {
      width: 100%;
      box-sizing: border-box;
      padding: 0 $item-separation;
      &:not(:first-of-type) {
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: 50% 50% (-$apothem);
      }
      @for $i from 2 through $n {
        &:nth-child(#{$i}) {
          transform: rotateY(#{($i - 1) * $theta}rad);
        }
      }
    }
  }
  nav {
    display: flex;
    justify-content: center;
    margin: 20px 0 0;

    button {
      flex: 0 0 auto;
      margin: 0 5px;

      cursor: pointer;

      color: #333;
      font-weight: bold;
      background: none;
      border: 1px solid;
      letter-spacing: 1px;
      padding: 5px 10px;
      &:hover {
        background: #333;
        color: #fff;
        transition: 0.3s ease;
      }
    }
  }
}
.worksText {
  width: 45vw;
  height: 35px;
  margin: 15px auto;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
  border-radius: 6px;
}
.arrows {
  color: #fff;
  cursor: pointer;
  font-size: 250%;
  font-weight: bold;
  margin: auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
.bigimg {
  text-align: center;
  position: absolute;
  /*width: 90vw;*/
  /*height: 80vh;*/
  /*max-width: 800px;*/
  top: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: 1s ease;
  transform: rotate(360deg);
}
.modal .bigimg img {
  max-width: 100%;
  vertical-align: baseline;
  width: 90vw;
}
.close-btn {
  color: #fff;
  font-size: 20px;
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
.fadeHoge-enter-active,
.fadeHoge-leave-active {
  transition: opacity 1s ease;
}

.fadeHoge-enter-from,
.fadeHoge-leave-to {
  opacity: 0;
}
.fadeHoge-enter-active img,
.fadeHoge-leave-active img {
  transition: 1s ease;
  transform: rotate(0deg);
}

.fadeHoge-enter-from img,
.fadeHoge-leave-to img {
  opacity: 0;
  transform: rotate(360deg) scale(30%);
}
.works-enter-active,
.works-leave-active {
  transition: opacity 1s ease;
}

.works-enter-from,
.works-leave-to {
  opacity: 0;
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
  $n: 11; // Number of images
  $item-width: 200px; // Width of an image. In the Js version this value can be a percentage
  $item-separation: 10px; // The space between the images. This will decrease the effective item width
  $viewer-distance: 800px;
  // Derived variables
  $theta: 2 * 3.141592653589793 / $n;
  $apothem: 482.842712474619px; // == $item-width / (2 * tan(PI / $n))
  .carouselImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35vh;
    perspective: $viewer-distance;
    overflow: hidden;
    > * {
      flex: 0 0 auto;
    }
    figure {
      margin: 0%;
      width: $item-width;
      transform-style: preserve-3d;
      transform-origin: 50% 50% (-$apothem);
      transition: transform 0.5s;
      transform: rotateY(/* some amount here */ rad);
      img {
        width: 100%;
        box-sizing: border-box;
        padding: 0 $item-separation;
        &:not(:first-of-type) {
          position: absolute;
          left: 0;
          top: 0;
          transform-origin: 50% 50% (-$apothem);
        }
        @for $i from 2 through $n {
          &:nth-child(#{$i}) {
            transform: rotateY(#{($i - 1) * $theta}rad);
          }
        }
      }
    }
    nav {
      display: flex;
      justify-content: center;
      margin: 20px 0 0;

      button {
        flex: 0 0 auto;
        margin: 0 5px;

        cursor: pointer;

        color: #333;
        font-weight: bold;
        background: none;
        border: 1px solid;
        letter-spacing: 1px;
        padding: 5px 10px;
      }
    }
  }
  .worksText {
    width: 22vw;
    height: 52px;
    margin: 15px auto;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    border-radius: 10px;
  }
  .arrows {
    color: #fff;
    cursor: pointer;
    font-size: 250%;
    font-weight: bold;
    margin: auto;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
  }
  .bigimg {
    text-align: center;
    position: absolute;
    /*width: 80%;*/
    height: 80vh;
    max-width: 800px;
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: 1s ease;
    transform: rotate(360deg);
  }
  .modal .bigimg img {
    width: auto;
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
}
</style>
