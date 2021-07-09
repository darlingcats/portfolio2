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
  margin-right: 20px;
  margin-left: 0px;
}
.face img {
  width: 50px;
}
.profText {
  text-align: left;
}
@media screen and (min-width: 481px) {
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
}
</style>
