<template>
  <div class="videos-wrapper">
    <h2 class="pt-2 itiran">動画一覧</h2>

    <div class="d-inline-block darkSoul3 px-2">
      <h3>DarkSoulⅢ</h3>
      <div class="playlist">
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/videoseries?list=PL_uuwK8ALZljS7Z2mSBP2O_ESQ70cXnG8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="d-inline-block sing px-2">
      <h3>歌ってみた</h3>
      <div class="playlist">
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/videoseries?list=PL_uuwK8ALZlhJcjLEOLjG8qyd-GZC2_bb"
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
export default class Videos extends Vue {}
</script>

<style scoped>
.videos-wrapper {
  flex: 1;
  margin: 0 10vw;
  background-color: white;
  padding: 0 4vw;
}

h2 {
  font-size: 3vh;
}

h3 {
  width: 50vw;
}

.playlist {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56%;
}

.playlist iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
