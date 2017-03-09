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

<style>
html,body{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
}
</style>
