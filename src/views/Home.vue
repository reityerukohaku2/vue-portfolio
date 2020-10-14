<template>
  <div class="home">
    <div class="top">
      <img src="../assets/hikari-logo.png" width="500" height="500" alt />
      <div class="page-title">
        <h1>
          ハッピーバースデーヒカリ！！<br />
          ヒカリの部屋
        </h1>
        <h2>～ヒカリのげぇむじっきょぉ～</h2>
      </div>
    </div>

    <div class="about" id="about" align="left">
      <h3>ヒカリとは</h3>
      <div class="about-text">
        <p>
          令和二年―六月―二十七日―――西ノ国からYoutube界に舞い降りた問題児．実家では母親と同じ部屋で暮らし，動画作成，歌ってみたをしたくてもできなかった．
        </p>
        <p>
          一人暮らしを始め，抑圧から解き放たれた彼は自由を手に入れた．彼を止める者は誰もいない…<br />
          たとえ友人に「気持ち悪い」「直視できない」と言われても…彼は止まらない…！
        </p>
      </div>
      <h3 id="video">最新動画</h3>
      <div align="center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EvpX5b7QIAE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
