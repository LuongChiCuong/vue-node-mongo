<template>
  <div class="url-container">
    <div class="row">
      <ul>
        <li class="col s12 m3 l2 item-content" v-for="bm in filteredBookmarks(bookmarks)">
          <div class="card-icon">
            <img :src="'https://www.google.com/s2/favicons?domain=' + bm.url" class="favicon">
          </div>
          <div class="card-content">
            <b>{{ bm.title }}</b>
            <br/>
            <i>{{ bm.url }}</i>
            <p>{{ bm.description }}</p>
            <tags :tagValue="bm.tags"></tags>
            <a :href="bm.url" target="_blank">Open in new tab</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Tags from './Tags'
// var _ = require('lodash')

export default {
  name: 'items',
  components: {
    Tags
  },
  data () {
    return {
      bookmarks: [],
      filterText: 'All'
    }
  },
  // computed: {
  //   computedBookmarks: function () {
  //     return this.bookmarks.filter(function (bm) {
  //       for (var i = 0; i < bm.tags.length; i++) {
  //         return bm.tags[i].name === 'HTML/CSS'
  //       }
  //     })
  //   }
  // },
  created: function () {
    this.$parent.$on('test', this.filterBy)
  },
  methods: {
    loadBookmarks: function () {
      this.$http.get('http://localhost:3000/bookmarks').then((res) => {
        this.bookmarks = res.body
      }, (err) => {
        console.log(err)
      })
    },
    filteredBookmarks: function (bookmarks) {
      let filterValue = this.filterText
      if (filterValue === 'All') {
        return this.bookmarks
      } else {
        return bookmarks.filter(function (bm) {
          for (var i = 0; i < bm.tags.length; i++) {
            if (bm.tags[i].name === filterValue) {
              return true
            }
          }
        })
      }
    },
    filterBy: function (tagName) {
      this.filterText = tagName
      this.filteredBookmarks(this.bookmarks)
    }
  },
  mounted: function () {
    this.loadBookmarks()
  }
}
</script>

<style>
  .url-container {
    padding: 20px;
  }
  .item-content {
    display: flex;
    flex-direction: column;
  }
  .card-icon {
    position: absolute;
  }
  .card-content {
    margin-left: 40px;
  }
  .card-content b{
    font-size: 16px;
    line-height: 18px;
  }
  .favicon {
    width: 30px;
    height: 30px;
  }
</style>
