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
        <a href="#" class="nav-item nav-link">最新動画</a>
        <a href="#" class="nav-item nav-link">研究実績</a>
      </div>
    </nav>

    <div class="body" align="center">
      <div class="top">
        <img src="./assets/hikari-logo.png" width="500" height="500" alt />
        <div class="page-title">
          <h1>ハッピーバースデーヒカリ！！</h1>
          <h2>ヒカリのげぇむじっきょぉ</h2>
        </div>
      </div>

      <div class="about" id="about" align="left">
        <h3>ヒカリとは</h3>
      </div>
      <div class="about-text">
        <p>西ノ国からYoutube界に舞い降りた問題児</p>
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

.about-text {
  border-top: 4px dashed orange;
}
</style>
