<template>
  <div class="row">
    <div class="col m12 center black bottom-nav">
      <ul class="bottom-tag-list">
        <li v-for="tag in tags">
            <span v-on:click="filterBy(tag.name)">{{tag.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var tagsData = [
  {name: 'All'},
  {name: 'HTML/CSS'},
  {name: 'JS'},
  {name: 'AngularJS'},
  {name: 'VueJS'},
  {name: 'NodeJS'},
  {name: 'Awwwards'}
]

export default {
  name: 'bottomBar',
  data () {
    return {
      tags: tagsData
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

<style lang="less">
  .bottom-nav {
    position: fixed;
    bottom: 0;
    color: white;
    height: 50px;
    .bottom-tag-list {
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      margin-top: 0;
      li {
        margin: 0 20px;
        color: #64ffda;
        cursor: pointer;
      }
    }
  }

</style>
