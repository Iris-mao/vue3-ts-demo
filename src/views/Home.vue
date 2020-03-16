<template>
  <div class="home">
    <div class="content">
      <div class="home-header">
        <router-link class="link" to="/home"></router-link>
        <img class="home-logo" src="../assets/logo.png" alt="logo">
      </div>
      <div class="home-body">
        <div class="list">
          <router-link class="link" to="/articles">文章</router-link>
          <router-link class="link" to="/project">项目</router-link>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://github.com/biaochenxuying">github</a>
        </div>
        <div class="introduce">顺其自然</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
