<template>
  <div class="home-wrapper">
    <div class="top">
      <img src="../assets/hikari-logo.png" alt />
      <div class="page-title">
        <h1>
          ハッピーバースデーヒカリ！！<br />
          ヒカリの部屋
        </h1>
        <h2>～ヒカリのげぇむじっきょぉ～</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style scoped>
img {
  width: 30vw;
  height: 30vw;
}

.home-wrapper {
  flex: 1;
  margin: 0 10vw;
  background-color: white;
}
</style>
