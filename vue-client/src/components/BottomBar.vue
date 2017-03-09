<template>
  <div class="row">
    <div class="col m12 center black bottom-nav">
      <span v-on:click="filterBy(html)">{{html}}</span>
      <span v-on:click="filterBy(all)">{{all}}</span>
      <span v-on:click="filterBy(js)">{{js}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomBar',
  data () {
    return {
      html: 'HTML/CSS',
      all: 'All',
      js: 'JS'
    }
  },
  methods: {
    filterBy: function (tagName) {
      // console.log(Vue)
      this.$parent.$emit('test', tagName)
    }
  }
}
</script>

<style>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    color: white;
    height: 25px;
  }
</style>
