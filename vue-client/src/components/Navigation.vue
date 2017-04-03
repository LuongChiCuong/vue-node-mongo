<template>
  <header>
    <div class="row">
      <nav>
        <div class="nav-wrapper white grey-text text-darken-4">
          <!-- <a href="#!" class="brand-logo center black-text" :class="{active: activeMenu}">{{logo}}</a> -->
          <router-link class="brand-logo center black-text" :to="{ name: 'app'}"
            :class="{active: activeMenu}">
            CreativeLang
          </router-link>
          <!-- <div class="skew-bg"></div> -->
          <div v-on:click="toggleMenu" class="menu left" :class="{active: activeMenu}">
            <div class="icon-hamburger">
              <span class="top-line"></span>
              <span class="mid-line"></span>
              <span class="bot-line"></span>
            </div>
          </div>
          <div v-on:click="toggleFinder" class="finder right center-align grey-text text-darken-4"
                :class="{active: activeFinder}">
            <i class="large material-icons">search</i>
          </div>
        </div>
      </nav>
    </div>
    <!-- menu content -->
    <div class="valign-wrapper menu-content" :class="{active: activeMenu}">
      <ul class="valign">
        <li>
          <router-link class="link-item" :to="{ name: 'app'}">Home
            <span class="link-layer" data-text="Home"></span>
          </router-link>
        </li>
        <li>
          <router-link class="link-item" :to="{ name: 'list'}">Bookmarks
            <span class="link-layer" data-text="Bookmarks"></span>
          </router-link>
        </li>
        <li>
          <router-link class="link-item" :to="{ name: 'ebook'}">Ebooks
            <span class="link-layer" data-text="Ebooks"></span>
          </router-link>
        </li>
        <li>
          <router-link class="link-item" :to="{ name: 'about'}">About
            <span class="link-layer" data-text="About"></span>
          </router-link>
        </li>
        <li>
          <router-link class="link-item" :to="{ name: 'contact'}">Contact
            <span class="link-layer" data-text="Contact"></span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- Finder content -->
    <div class="finder-content" :class="{active: activeFinder}">
      <div v-on:click="toggleFinder" class="close-finder">
        <span class="icon-close-finder"></span>
      </div>
      <div v-if="activeFinder" class="container search-container">
        <div class="row search-row">
          <div class="offset-m2 col m8">
            <input placeholder="Search ..." v-model="searchValue" v-on:keyup.enter="goFinder(searchValue)"
              data-length="100" type="text" autofocus>
          </div>
          <div class="col m2 search-button">
            <i class="medium material-icons" v-on:click="goFinder(searchValue)">search</i>
          </div>
        </div>
        <searchResult :value="searchValue"></searchResult>
      </div>
    </div>
  </header>
</template>

<script>
var _ = require('lodash')
import searchResult from './searchResult'
export default {
  name: 'navigation',
  components: {
    searchResult
  },
  data () {
    return {
      searchValue: '',
      activeMenu: false,
      activeFinder: false
    }
  },
  // define methods under the `methods` object
  methods: {
    toggleMenu: function (event) {
      this.activeMenu = !this.activeMenu
    },
    toggleFinder: function (event) {
      // if (this.activeFinder) {
      //   this.searchValue = ''
      // }
      this.activeFinder = !this.activeFinder
    },
    goFinder: _.debounce(function (text) {
      if (!text) return
      setTimeout(function () {
        this.$emit('full-text-search', text)
      }.bind(this), 500)
    }, 500)
  }
}
</script>

<style lang="less" scoped>
  nav {
    position: relative;
    /*logo style*/
    .brand-logo {
      z-index: 22;
      // font-family: Bellico;
      font-family: OAF;
      font-size: 3rem;
      letter-spacing: 5px;
      margin-top: -5px;
    }
    .brand-logo.active{
      color: #64ffda !important;
      -webkit-transition: color 1s ease-in-out;
      transition: color 1s ease-in-out;
    }
    /*menu: div contain hamburger icon*/
    .menu {
      width: 60px;
      margin-left: 15px;
      cursor: pointer;
      overflow: hidden;
      z-index: 19;
      position: relative;
      -webkit-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
      &:hover {
        .icon-hamburger {
          span {
            width: 100%;
          }
        }
      }
      /*hamburger icon style*/
      .icon-hamburger {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        padding: 21px 15px;
        height: 60px;
        /*top line icon*/
        /*----------------------------------------*/
        .top-line {
          align-self: flex-start;
          height: 2px;
          width: 100%;
          /*background-color: #64ffda;*/
          background-color: black;
          position: relative;
          top: 0;
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
          /*transition*/
          -webkit-transition: all .4s ease-in-out, top .3s ease-in-out .3s, -webkit-transform .3s ease-in-out;
          transition: all .4s ease-in-out,transform .3s ease-in-out, top .3s ease-in-out .3s, -webkit-transform .3s ease-in-out;
        }
        /*mid line icon*/
        /*----------------------------------------*/
        .mid-line {
          width: 75%;
          opacity: 1;
          -webkit-align-self: flex-start;
          -ms-flex-item-align: start;
          align-self: flex-start;
          height: 2px;
          /*background-color: #64ffda;*/
          background-color: black;
          position: relative;
          top: 0;
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
          /*transition*/
          -webkit-transition: width .2s ease-in-out, opacity 0s ease-in-out .3s;
          transition: width .2s ease-in-out, opacity 0s ease-in-out .3s;
        }
        /*bottom line icon*/
        /*----------------------------------------*/
        .bot-line {
          width: 50%;
          -webkit-align-self: flex-start;
          -ms-flex-item-align: start;
          align-self: flex-start;
          height: 2px;
          /*background-color: #64ffda;*/
          background-color: black;
          position: relative;
          top: 0;
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
          /*transition*/
          -webkit-transition: all .4s ease-in-out, top .3s ease-in-out .3s, -webkit-transform .3s ease-in-out;
          transition: all .4s ease-in-out, transform .3s ease-in-out, top .3s ease-in-out .3s, -webkit-transform .3s ease-in-out;
        }
      }
    }
    /*change with of hamburger icon*/
    .menu.active {
      .icon-hamburger {
        span {
          width: 100%;
        }
        /*on click on menu */
        .top-line {
          top: 6px;
          background-color: #64ffda;
          transform: rotate(45deg);
          -webkit-transition: top .3s ease-in-out, -webkit-transform .3s ease-in-out .3s;
          transition: top .3s ease-in-out, transform .3s ease-in-out .3s, -webkit-transform .3s ease-in-out .3s;
        }
        /*on click on menu */
        .mid-line {
          opacity: 0;
          background-color: #64ffda;
          -webkit-transition: opacity 0s ease-in-out .3s;
          transition: opacity 0s ease-in-out .3s;
        }
        /*on click on menu */
        .bot-line {
          top: -6px;
          background-color: #64ffda;
          transform: rotate(-45deg);
          -webkit-transition: top .3s ease-in-out,-webkit-transform .3s ease-in-out .3s;
          transition: top .3s ease-in-out,transform .3s ease-in-out .3s,-webkit-transform .3s ease-in-out .3s;
        }
      }
    }

    .finder {
      width: 60px;
      margin-right: 15px;
      cursor: pointer;
    }
  }

  /*menu content*/
  .menu-content {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    background: black;
    z-index: 15;
    opacity: 0;
    left: -100%;
    -webkit-transition: opacity .5s ease-in-out, left .3s ease-in-out;
    transition: opacity .5s ease-in-out, left .3s ease-in-out;
    ul li {
      color: #64ffda;
      font-size: 2.5rem;
      margin-bottom: 20px;
      margin-left: 100px;
      a{
        color: white;
        -webkit-transition: color .3s;
        transition: color .3s;
        position: relative;
        overflow: hidden;
      }
    }
  }
  .menu-content.active {
    opacity: 1;
    left: 0;
    /*transition*/
    -webkit-transition: opacity .3s ease-in-out, left .5s ease-in-out;
    transition: opacity .3s ease-in-out, left .5s ease-in-out;
  }
  // finder content
  .finder-content {
    .menu-content;
    background: white;
    left: 100%;
    z-index: 20;
    border: 5px solid transparent;
    .close-finder {
      // color: #64ffda !important;
      float: right;
      position: relative;
      top: 0;
      width: 60px;
      height: 60px;
      cursor: pointer;
      .icon-close-finder {
        display: block;
        width: 30px;
        height: 2px;
        opacity: 0;
        -webkit-transition: opacity 1s ease-in-out;
        transition: opacity 1s ease-in-out;
        // background-color: #64ffda;
        background-color: black;
        position: absolute;
        top: 50%;
        right: 1px;
        left: 10px;
        &:before {
          content: '';
          height: 2px;
          width: 15px;
          // background-color: #64ffda;
          background-color: black;
          transform: rotate(45deg);
          position: absolute;
          top: -6px;
          right: -1px;
        }
        &:after {
          content: '';
          height: 2px;
          width: 15px;
          // background-color: #64ffda;
          background-color: black;
          transform: rotate(-45deg);
          position: absolute;
          top: 6px;
          right: -1px;
        }
      }
    }
    .search-container {

      margin-top: 100px;
      .search-row {
        margin-bottom: 5px;
        input {
          font-size: 2rem;
          &:focus {
            border-bottom-color: #64ffda;
          }
        }
        .search-button {
          i {
            font-size: 3rem;
            margin-top: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .finder-content.active {
    .menu-content.active;
    border-color: black;
    -webkit-transition: border-color 3s ease-in-out;
    transition: border-color 3s ease-in-out;
    .close-finder {
      .icon-close-finder {
        opacity: 1;
        -webkit-transition: opacity 3s ease-in-out;
        transition: opacity 3s ease-in-out;
      }
    }
  }

  /*animation each link in nav content*/
  /*---------------------------animation out--------------------------------*/
  @-web-kit-keyframes anim-out-layer {
    0% {
      -webkit-transform:translateZ(0);
      transform:translateZ(0)
    }
    to {
      -webkit-transform:translate3d(-100%,0,0);
      transform:translate3d(-100%,0,0)
    }
  }
  @keyframes anim-out-layer {
    0% {
      -webkit-transform:translateZ(0);
      transform:translateZ(0)
    }
    to {
      -webkit-transform:translate3d(-100%,0,0);
      transform:translate3d(-100%,0,0)
    }
  }

  @-web-kit-keyframes anim-out-text {
    0% {
      -webkit-transform:translateZ(0);
      transform:translateZ(0)
    }
    to {
      -webkit-transform:translate3d(100%,0,0);
      transform:translate3d(100%,0,0)
    }
  }
  @keyframes anim-out-text {
    0% {
      -webkit-transform:translateZ(0);
      transform:translateZ(0)
    }
    to {
      -webkit-transform:translate3d(100%,0,0);
      transform:translate3d(100%,0,0)
    }
  }
  /*---------------------------animation in---------------------------------*/
  @-webkit-keyframes anim-in-text {
      0% {
        -webkit-transform:translate3d(100%,0,0);
        transform:translate3d(100%,0,0)
      }
      to {
        -webkit-transform:translateZ(0);
        transform:translateZ(0)
      }
  }
  @keyframes anim-in-text {
      0% {
        -webkit-transform:translate3d(100%,0,0);
        transform:translate3d(100%,0,0)
      }
      to {
        -webkit-transform:translateZ(0);
        transform:translateZ(0)
      }
  }
  @-web-kit-keyframes anim-in-layer {
    0% {
      -webkit-transform:translate3d(-100%,0,0);
      transform:translate3d(-100%,0,0)
    }
    to {
      -webkit-transform:translateZ(0);
      transform:translateZ(0)
    }
  }
  @keyframes anim-in-layer {
    0% {
      -webkit-transform:translate3d(-100%,0,0);
      transform:translate3d(-100%,0,0)
    }
    to {
      -webkit-transform:translateZ(0);
      transform:translateZ(0)
    }
  }

  .mix-link-item-layer {
    background-color: #000;
    width: 100%;
    display: block;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .link-item {
    &:hover {
      .link-layer {
        -webkit-animation: anim-in-layer .3s ease forwards;
        animation: anim-in-layer .3s ease forwards;
        &:before {
          -webkit-animation: anim-in-text .3s ease forwards;
          animation: anim-in-text .3s ease forwards;
        }
      }
    }
    .link-layer {
      .mix-link-item-layer;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0);
      -webkit-animation: anim-out-layer .3s ease-out;
      &:before {
        .mix-link-item-layer;
        content: attr(data-text);
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        color: #64ffda;
        -webkit-animation: anim-out-text .3s ease-out;
        animation: anim-out-text .3s ease-out;
      }
    }
  }

</style>
