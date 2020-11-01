<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div href="#" class="title">
      <router-link to="/" class="title">
        <img src="../assets/hikari-logo.png" width="50" height="50" alt />
        ヒカリの部屋
      </router-link>
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
      <router-link to="/about" class="nav-item nav-link"
        >ヒカリとは</router-link
      >
      <router-link to="/videos" class="nav-item nav-link">動画一覧</router-link>
    </div>
  </nav>
</template>

<style>
.title {
  color: white;
}

.navbar-nav {
  margin-left: 1vw;
}

.title:hover {
  color: white;
  text-decoration: none;
}

.navbar {
  border-bottom: 4px solid #b4b4b4;
}
</style>
