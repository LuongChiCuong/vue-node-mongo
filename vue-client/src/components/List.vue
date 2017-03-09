<template>
  <div>
    <!-- <h1> {{subject}} </h1> -->
    <navigation></navigation>
    <items></items>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
// import Vue from 'vue'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import Navigation from './Navigation'
import Items from './Items'
import BottomBar from './BottomBar'

export default {
  name: 'list',
  components: {
    Navigation, Items, BottomBar
  },
  data () {
    return {
      subject: 'CreativeLang'
    }
  }
}
</script>
