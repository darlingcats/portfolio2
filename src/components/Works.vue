<template>
  <transition name="works">
    <div class="img">
      <div class="arrows" @click="carouselIdx = ++carouselIdx % 6">
        ＜
      </div>
      <ul class="carousel" :class="'carouselprev' + carouselIdx">
        <li v-for="imgurl in imgurls" :key="imgurl">
          <img @click="showModal(imgurl)" :src="imgurl" />
        </li>
      </ul>
      <div class="arrows" @click="carouselIdx = --carouselIdx % 6">
        ＞
      </div>
    </div>
  </transition>
  <transition name="fadeHoge">
    <div class="modal" v-if="modalvisible" @click.prevent="hidemodal">
      <div class="bigimg"><img :src="currentimgurl" alt="" /></div>
      <p class="close-btn"><a href="#">✖</a></p>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    imgurls: {
      type: Array,
      default: [
        '/src/assets/20191029chipsaw.jpg',
        '/src/assets/20200708sale.jpg',
        '/src/assets/20210315sale.jpg',
        '/src/assets/20210318sale.jpg',
        '/src/assets/20210426sale.jpg',
        '/src/assets/0001_page-0001.jpg'
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
  }
}
</script>

<style lang="scss" scoped>
.img {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.arrows {
  color: #fff;
  cursor: pointer;
  font-size: 250%;
  font-weight: bold;
  margin: auto;
}
.carousel {
  position: relative;
  transform-style: preserve-3d;
  animation: anime1 20s linear infinite;
  height: 140px;
  width: 500px;
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
  width: 250px;
}
/*@keyframes anime1 {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(-360deg);
    }
  }*/
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
.works-enter-active,
.works-leave-active {
  transition: opacity 1s ease;
}

.works-enter-from,
.works-leave-to {
  opacity: 0;
}
</style>
