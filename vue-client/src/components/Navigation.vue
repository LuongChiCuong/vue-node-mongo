<template>
  <div class="row">
    <nav>
      <div class="nav-wrapper white grey-text text-darken-4">
        <a href="#!" class="brand-logo center grey-text text-darken-4">{{logo}}</a>
        <div class="skew-bg"></div>
        <div v-on:click="clickMenu" class="menu left grey-text text-darken-4">
          <div class="icon-hamburger">
            <span class="top-line"></span>
            <span class="mid-line"></span>
            <span class="bot-line"></span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      logo: 'CreativeLang'
    }
  },
  // define methods under the `methods` object
  methods: {
    clickMenu: function (event) {
      var $ = require('jquery')
      console.log($(this))
      $('.menu').toggleClass('active')
      // this.addClass('active');
    }
  }
}
</script>

<style scoped>
  nav {
    position: relative;
  }
  /*skew background*/
  .skew-bg {
    position: absolute;
    height: 100%;
    width: 100px;
    background-color: black;
    z-index: 1;
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
    z-index: 9;
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
    background-color: #64ffda;
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
    background-color: #64ffda;
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
    background-color: #64ffda;
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
    transform: rotate(-45deg);
    -webkit-transition: top .3s ease-in-out,-webkit-transform .3s ease-in-out .3s;
    transition: top .3s ease-in-out,transform .3s ease-in-out .3s,-webkit-transform .3s ease-in-out .3s;
  }
</style>
