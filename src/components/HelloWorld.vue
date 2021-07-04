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
        <div class="prof">
            <div class="face">
                <img src="../assets/P_B2C1_0316_182849.jpg" alt="顔写真">
            </div>
            <div class="name">
                <p>
                    平林　彰史
                </p>
                <p>
                    1983年6月24日、東京都の小平市に生まれる。<br>
                </p>
            </div>
        </div>
        <div class="img">
            <ul>
                <li><a href=""><img src="../assets/20191029chipsaw.jpg"></a></li>
                <li><a href=""><img src="../assets/20200708sale.jpg"></a></li>
                <li><a href=""><img src="../assets/20210315sale.jpg"></a></li>
            </ul>
            <ul>
                <li><a href=""><img src="../assets/20210318sale.jpg"></a></li>
                <li><a href=""><img src="../assets/20210426sale.jpg"></a></li>
                <li><a href=""><img src="../assets/0001_page-0001.jpg"></a></li>
            </ul>
        </div>
        <div class="modal">
        　　<div class="bigimg"><img src="" alt=""></div>
        　　<p class="close-btn"><a href="">✖</a></p>
        </div>
    </main>
    </section>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}
p {
  background: red;
}
</style>
