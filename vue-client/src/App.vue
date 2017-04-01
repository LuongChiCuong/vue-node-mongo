<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello></hello> -->
    <home></home>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="less">
  // @font-face {
  //   font-family: Bellico;
  //   src: url("./assets/Bellico.ttf");
  // }
  @font-face {
    font-family: OAF;
    src: url("./assets/OAF.otf");
  }
  html,body {
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    -webkit-user-select: none; /* Chrome/Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    font-family: "Comic Sans MS";
    /* Rules below not implemented in browsers yet */
    -o-user-select: none;
    user-select: none;
    #app {
      // font-family: 'Avenir', Helvetica, Arial, sans-serif;
      font-family: "Comic Sans MS";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100%;
    }
  }

</style>
