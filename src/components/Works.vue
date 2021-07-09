<template>
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
    <TypeWriterText :text="'作品を選択してください'" :textTimeout="20000" />
  </div>
  <transition name="fadeHoge">
    <div class="modal" v-if="modalvisible" @click.prevent="hidemodal">
      <div class="bigimg"><img :src="currentimgurl" alt="" /></div>
      <p class="close-btn"><a href="#">✖</a></p>
    </div>
  </transition>
</template>

<script lang="ts">
import TypeWriterText from './TypeWriterText.vue'

export default {
  name: 'Works',
  components: {
    TypeWriterText
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
    }
  },
  data () {
    return {
      currentimgurl: '/src/assets/20191029chipsaw.jpg',
      counter: 0,
      modalvisible: false,
      isPrev: 360 / this.imgurls.length,
      carouselIdx: 0,
      showImg: false
    }
  },
  methods: {
    fadeIn () {
      this.showImg = false
      setTimeout(() => {
        this.showImg = true
      }, 3000)
    },
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
