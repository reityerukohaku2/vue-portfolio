<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div href="#" class="navbar-brand">
      <img src="../assets/hikari-logo.png" width="50" height="50" alt />
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
      <router-link to="/" class="nav-item nav-link">ヒカリとは</router-link>
      <router-link to="/videos" class="nav-item nav-link">動画一覧</router-link>
      <router-link to="/twitterTestSite" class="nav-item nav-link"
        >Twitter試験場</router-link
      >
    </div>
  </nav>
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
