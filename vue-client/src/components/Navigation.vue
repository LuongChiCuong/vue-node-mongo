<template>
  <header>
    <div class="row">
      <nav>
        <div class="nav-wrapper white grey-text text-darken-4">
          <a href="#!" class="brand-logo center grey-text text-darken-4" :class="{active: activeMenu}">{{logo}}</a>
          <!-- <div class="skew-bg"></div> -->
          <div v-on:click="clickMenu" class="menu left grey-text text-darken-4" :class="{active: activeMenu}">
            <div class="icon-hamburger">
              <span class="top-line"></span>
              <span class="mid-line"></span>
              <span class="bot-line"></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
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
  </header>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      logo: 'CreativeLang',
      activeMenu: false
    }
  },
  // define methods under the `methods` object
  methods: {
    clickMenu: function (event) {
      this.activeMenu = !this.activeMenu
      // var $ = require('jquery')
      // $('.menu').toggleClass('active')
      // $('.menu-content').toggleClass('active')
      // this.addClass('active');
    }
  }
}
</script>

<style scoped>
  nav {
    position: relative;
  }
  /*logo style*/
  .brand-logo {
    z-index: 19;
  }
  .brand-logo.active {
    color: #64ffda !important;
    -webkit-transition: color 1s ease-in-out;
    transition: color 1s ease-in-out;
  }
  /*skew background*/
  .skew-bg {
    position: absolute;
    height: 100%;
    width: 100px;
    background-color: black;
    z-index: 11;
    -webkit-transform: skew(-45deg);
    -ms-transform: skew(-45deg);
    transform: skew(-45deg);
    left: -32px;
  }
  /*menu: div contain hamburger icon*/
  .menu {
    width: 60px;
    cursor: pointer;
    overflow: hidden;
    z-index: 19;
    position: relative;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  /*change with of hamburger icon*/
  .menu:hover span, .menu.active span{
    width: 100%;
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
  }
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
  /*on click on menu */
  .menu.active .top-line {
    top: 6px;
    background-color: #64ffda;
    transform: rotate(45deg);
    -webkit-transition: top .3s ease-in-out, -webkit-transform .3s ease-in-out .3s;
    transition: top .3s ease-in-out, transform .3s ease-in-out .3s, -webkit-transform .3s ease-in-out .3s;
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
  /*on click on menu */
  .menu.active .mid-line {
    opacity: 0;
    background-color: #64ffda;
    -webkit-transition: opacity 0s ease-in-out .3s;
    transition: opacity 0s ease-in-out .3s;
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
  /*on click on menu */
  .menu.active .bot-line {
    top: -6px;
    background-color: #64ffda;
    transform: rotate(-45deg);
    -webkit-transition: top .3s ease-in-out,-webkit-transform .3s ease-in-out .3s;
    transition: top .3s ease-in-out,transform .3s ease-in-out .3s,-webkit-transform .3s ease-in-out .3s;
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
    -webkit-transition: all .3s ease-in-out, left .3s ease-in-out;
    transition: all .3s ease-in-out, left .3s ease-in-out;
    /*transition*/
    /*-webkit-transition: all .4s ease-in-out, top .3s ease-in-out .3s, -webkit-transform .3s ease-in-out;
    transition: all .4s ease-in-out,transform .3s ease-in-out, top .3s ease-in-out .3s, -webkit-transform .3s ease-in-out;*/
  }
  .menu-content.active {
    opacity: 1;
    left: 0;
    /*transition*/
    -webkit-transition: opacity .3s ease-in-out, left .5s ease-in-out;
    transition: opacity .3s ease-in-out, left .5s ease-in-out;
  }
  .menu-content ul li {
    color: #64ffda;
    font-size: 2.5rem;
    margin-bottom: 20px;
    margin-left: 100px;
  }
  .menu-content ul li a{
    color: white;
    -webkit-transition: color .3s;
    transition: color .3s;
    position: relative;
    overflow: hidden;
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

  .link-item .link-layer, .link-item .link-layer:before  {
    background-color: #000;
    width: 100%;
    display: block;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .link-item .link-layer {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
    -webkit-animation: anim-out-layer .3s ease-out;
  }
  .link-item .link-layer::before {
    content: attr(data-text);
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
    color: #64ffda;
    -webkit-animation: anim-out-text .3s ease-out;
    animation: anim-out-text .3s ease-out;
  }
  .link-item:hover > .link-layer::before {
    -webkit-animation: anim-in-text .3s ease forwards;
    animation: anim-in-text .3s ease forwards;
  }
  .link-item:hover > .link-layer {
    -webkit-animation: anim-in-layer .3s ease forwards;
    animation: anim-in-layer .3s ease forwards;
  }
</style>
