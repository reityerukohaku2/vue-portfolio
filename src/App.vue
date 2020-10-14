<template>
  <div id="app" class="all">
    <Header />
    <div class="body" align="center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
