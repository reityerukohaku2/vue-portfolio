<template>
  <div id="app" class="all">
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
    </head>
    <Header />

    <div class="body" align="center">
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.all {
  background-color: rgba(255, 153, 0, 0.253);
  font-size: 2vh;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}

.body {
  display: flex;
  flex-flow: column;
  min-height: 100%;
  flex: 1;
}
</style>
