<template>
  <div class="face">
    <img :src="imgProf" alt="顔写真" width="150px" />
  </div>
  <div class="profText">
    <p>
      <TypeWriterText :text="'名前：平林　彰史'" :textTimeout="3200" />
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
          '高校卒業後、ファッションデザイナーを目指すが挫折。しかしグラフィックの面白さに目覚め、現在に至る。'
        "
        :textTimeout="10400"
      />
    </p>
    <div class="resume">
      <button><a :href="rsmurls" target="”_blank”">履歴書</a></button>
      <button><a :href="careerurls" target="”_blank”">職務経歴書</a></button>
    </div>
  </div>
</template>

<script lang="ts">
import TypeWriterText from './TypeWriterText.vue'
import Works from './Works.vue'
export default {
  name: 'Profile',
  components: {
    TypeWriterText,
    Works
  },
  props: {
    imgProf: {
      type: String,
      default: './assets/face.png'
    },
    rsmurls: {
      type: Array,
      default: ['./assets/rirekisho2021.pdf']
    },
    careerurls: {
      type: Array,
      default: ['./assets/shokumukeirekisho2021.pdf']
    },

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
  }
}
</script>

<style lang="scss" scoped>
.face {
  margin-right: 10px;
  margin-left: 0px;
}
.face img {
  width: 55px;
}
.profText {
  text-align: left;
  p {
    display: block;
    &:nth-child(n + 2) {
      margin-top: 5px;
    }
  }
}
.resume {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-top: 10px;
  animation-name: resumeAnime;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 15s;
  animation-fill-mode: forwards;
  opacity: 0;
  button {
    border: 1px solid;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 12px;
    &:hover {
      color: #fff;
      background: #000;
    }
    a {
      position: relative;
    }
  }
}
@keyframes resumeAnime {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 481px) {
  //レスポンシブ
  .face {
    margin-right: 20px;
    margin-left: 0px;
  }
  .face img {
    width: 124px;
  }
  .profText {
    text-align: left;
    p {
      display: block;
      &:nth-child(n + 2) {
        margin-top: 10px;
      }
    }
  }
  .resume {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    margin-top: 20px;
    animation-name: resumeAnime;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-delay: 15s;
    animation-fill-mode: forwards;
    opacity: 0;
    button {
      font-size: 16px;
      border: 1px solid;
      border-radius: 3px;
      padding: 5px 10px;
      &:hover {
        color: #fff;
        background: #000;
      }
      a {
        position: relative;
      }
    }
  }
}
</style>
