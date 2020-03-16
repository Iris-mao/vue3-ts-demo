<template>
  <div id="app" class="container">
    <nav></nav>
    <div class="layout">
      <router-view />
      <slider></slider>
    </div>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { Vue, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import { Route } from "vue-router";
import Nav from "@/components/nav.vue"; // @ is an alias to /src
import Slider from "@/components/slider.vue"; // @ is an alias to /src
import Footer from "@/components/footer.vue"; // @ is an alias to /src
// import { isMobileOrPc } from "@/utils/utils";

@Component({
  components: {
    Nav,
    Slider,
    Footer
  }
})
export default class App extends Vue {
  // initial data
  private isShowNav = false;
  private isShowSlider = false;
  // lifestyle hook
  mounted(): void {
    this.routeChange(this.$route, this.$route)
  }
  // vue-property-decorator 是在 vue-class-component 上增强了更多的结合 Vue 特性的装饰器
  @Watch("$route")
  // method
  routeChange(val: Route, oldVal: Route): void {
    if (val.path === "/") {
      this.isShowNav = false;
    } else {
      this.isShowNav = true;
    }
    if (
      val.path === "/articles" ||
      val.path === "/archive" ||
      val.path === "/project" ||
      val.path === "/timeline" ||
      val.path === "/message"
    ) {
      this.isShowSlider = true;
    } else {
      this.isShowSlider = false;
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img{
  vertical-align: bottom;
}
</style>
