<!--<template>-->
<!--  <div class="home">-->
<!--    <div class="content">-->
<!--      <div class="home-header">-->
<!--        <router-link class="link" to="/home"></router-link>-->
<!--        <img class="home-logo" src="../assets/logo.png" alt="logo">-->
<!--      </div>-->
<!--      <div class="home-body">-->
<!--        <div class="list">-->
<!--          <router-link class="link" to="/articles">文章</router-link>-->
<!--          <router-link class="link" to="/project">项目</router-link>-->
<!--          <a target="_blank" rel="noopener noreferrer" class="link" href="https://github.com/biaochenxuying">github</a>-->
<!--        </div>-->
<!--        <div class="introduce">顺其自然</div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// @ is an alias to /src-->
<!--// import HelloWorld from "@/components/HelloWorld.vue";-->

<!--export default {-->
<!--  name: "Home",-->
<!--  components: {-->
<!--    // HelloWorld-->
<!--  }-->
<!--};-->
<!--</script>-->

<template>
  <div>
    <input v-model="msg" />
    <p>msg:{{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  // 初始化数据
  msg = 123;

  // 声明周期钩子
  mounted() {
    this.greet();
  }

  // 计算属性
  get computedMsg() {
    return "computed" + this.msg;
  }

  // 方法
  greet() {
    alert("greeting:" + this.msg);
  }
}
</script>
