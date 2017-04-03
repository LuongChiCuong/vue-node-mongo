<template>
  <div class="url-container">
    <div class="row">
      <ul>
        <li class="col s12 m3 l2 item-content" v-for="bm in filteredBookmarks(bookmarks)">
          <div class="card-icon">
            <img :src="'https://www.google.com/s2/favicons?domain=' + bm.url" class="favicon">
          </div>
          <div class="card-content">
            <b class="title">{{ bm.title }}</b>
            <br/>
            <!-- <i class="url-text">{{ bm.url }}</i> -->
            <p class="description">{{ bm.description }}</p>
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
      var api = 'http://creativelang-97156.app.xervo.io/bookmarks'
      // var api = 'http://localhost:3000/bookmarks'
      this.$http.get(api).then((res) => {
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

<style lang="less">
  .url-container {
    padding: 20px;
    .item-content {
      display: flex;
      flex-direction: column;
      min-height: 250px;
    }
  }
  // separate to make searchResult inherit style
  .card-icon {
    position: absolute;
    .favicon {
      width: 30px;
      height: 30px;
    }
  }
  .card-content {
    margin-left: 40px;
    b{
      font-size: 16px;
      line-height: 18px;
    }
    .url-text {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .description {
      min-height: 100px;
    }
  }

</style>
