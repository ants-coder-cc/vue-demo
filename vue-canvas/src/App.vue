<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <img :src="src" alt="" />
    <vue-canvas-poster
      :widthPixels="1000"
      :painting="painting"
      @success="success"
      @fail="fail"
    ></vue-canvas-poster>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      painting: {
        width: "550px",
        height: "876px",
        background: "#f4f5f7",
        views: [
          {
            type: "image",
            url: require("./assets/logo.png"),
            css: {
              top: "20px",
              left: "36px",
              borderRadius: "40px",
              width: "80px",
              height: "80px"
            }
          }
          // ....
        ]
      },
      src: ""
    };
  },
  methods: {
    success(src) {
      console.log(src);
      this.src = src;
    },
    fail(err) {
      console.log("fail", err);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
