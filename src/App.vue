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

<script lang="ts">
import VueRouter, { RouteConfig } from "vue-router";
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
  private CreateTitle(routeInstance: Array<RouteConfig>) {
    
  }
}
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
