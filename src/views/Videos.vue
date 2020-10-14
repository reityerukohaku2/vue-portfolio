<template>
  <div>
    <h2 class="pt-4">動画一覧</h2>
    <div class="d-inline-block darkSoul3 px-2">
      <h3>DarkSoulⅢ</h3>
      <iframe
        width="480"
        height="270"
        src="https://www.youtube.com/embed/videoseries?list=PL_uuwK8ALZljS7Z2mSBP2O_ESQ70cXnG8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="d-inline-block sing px-2">
      <h3>歌ってみた</h3>
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
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Videos extends Vue {}
</script>
