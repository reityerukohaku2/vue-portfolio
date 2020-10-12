<template>
  <div id="app" class="all">
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
      <div href="#" class="navbar-brand">
        <img src="./assets/hikari-logo.png" width="50" height="50" alt />
        ヒカリの部屋
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-items"
        aria-controls="nav-items"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-nav navbar-collapse collapse" id="nav-items">
        <a href="#about" class="nav-item nav-link">ヒカリとは</a>
        <router-link to="/videos">動画一覧</router-link>
      </div>
    </nav>

    <div class="body" align="center">
      <router-view></router-view>
      <div class="top">
        <img src="./assets/hikari-logo.png" width="500" height="500" alt />
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
        <div></div>
      </div>
    </div>
  </div>
</template>

<style>
.navbar {
  border-bottom: 4px solid #b4b4b4;
}

.all {
  background-color: rgba(255, 153, 0, 0.253);
  font-size: 2vh;
}

.body {
  margin: 0 30vh;
  background-color: white;
}

.page-title {
  padding: 5vh 0;
  background-color: rgb(219, 219, 219);
}

.about {
  padding: 5vh 10vh 0 10vh;
}

h3 {
  padding: 5vh 0 0 0;
  border-bottom: 4px dashed orange;
}
</style>
