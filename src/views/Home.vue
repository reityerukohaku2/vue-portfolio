<template>
  <div class="home">
    <p>{{ greetText }}</p>
    <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyButton from "@/components/MyButton.vue";

@Component({
  components: {
    MyButton
  }
})
export default class Home extends Vue {
  public greetText: string = "HelloWorld";

  public onMyButtonClicked() {
    this.greetText = "こんちゃ";
  }
}
</script>
