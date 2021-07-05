<template>
  <div class="shutter">
    <div>
      portfolio start
    </div>
  </div>
  <section class="container">
    <main>
      <header>
        <h1>portfolio</h1>
      </header>
      <!--<a href="http://www.tam-tam.co.jp/tipsnote/">
            <button>TipsNote に戻る</button>
        </a>-->
      <button @click="counter++" id="counter">Counter: {{ counter }}</button>
      <div class="prof">
        <div class="face">
          <img
            src="../assets/P_B2C1_0316_182849.jpg"
            alt="顔写真"
            width="150px"
          />
        </div>
        <div class="name">
          <p>
            平林　彰史
          </p>
          <p>1983年6月24日、東京都の小平市に生まれる。<br /></p>
        </div>
      </div>
      <div class="img">
        <ul>
          <li>
            <a href=""><img src="../assets/20191029chipsaw.jpg"/></a>
          </li>
          <li>
            <a href=""><img src="../assets/20200708sale.jpg"/></a>
          </li>
          <li>
            <a href=""><img src="../assets/20210315sale.jpg"/></a>
          </li>
          <li>
            <a href=""><img src="../assets/20210318sale.jpg"/></a>
          </li>
          <li>
            <a href=""><img src="../assets/20210426sale.jpg"/></a>
          </li>
          <li>
            <a href=""><img src="../assets/0001_page-0001.jpg"/></a>
          </li>
        </ul>
      </div>
      <div class="modal">
        <div class="bigimg"><img src="" alt="" /></div>
        <p class="close-btn"><a href="">✖</a></p>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      counter: 0
    }
  }
}
</script>

<style lang="scss" scoped>
$bg_color: #fafafa;
$font_color: #333;

body {
  background-color: $bg_color;
  color: $font_color;
  text-align: center;
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
ul {
  margin-bottom: 20px;
  text-align: center;
}
ul li a:hover {
  opacity: 0.8;
}
ul li {
  list-style: none;
  margin-bottom: 20px;
}
ul li:nth-last-child(1) {
  margin-right: 0;
}
ul li a img {
  width: 300px;
  margin-right: 0;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
}
.bigimg {
  position: absolute;
  /*width: 80%;*/
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
  }
  .prof {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
  .face {
    margin-right: 20px;
    margin-left: 0px;
  }
  .face img {
    width: 150px;
  }
  ul {
    display: flex;
    margin-bottom: 20px;
  }
  ul li a:hover {
    opacity: 0.8;
  }
  ul li {
    list-style: none;
    margin-right: 20px;
  }
  ul li:nth-last-child(1) {
    margin-right: 0;
  }
  ul li a img {
    width: 300px;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
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
