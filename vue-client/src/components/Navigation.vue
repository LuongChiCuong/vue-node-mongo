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
      <h5 class="valign">Menu content</h5>
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
</style>
