<template>
  <div class="video-bg-container">
    <div class="video-content">
      <div class="inner-content">
        <h2>Fullscreen HTML5 Background Video</h2>
        <p>
          Utilizes Javascript to create cover effect and updates on resize. Modernizr determines an image fallback for touch devices.
        </p>
        <router-link :to="{ name: 'list'}" class="btn-explore">
          <span class="row1">Explore Now</span>
          <span class="row2">Explore Now</span>
        </router-link>
      </div>
    </div>
      <div class="filter"></div>
      <video autoplay controls="controls" loop class="fillWidth">
          <!-- <source src="http://localhost:3000/video/browsing.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          <source src="http://localhost:3000/video/browsing.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. -->
          <source src="http://creativelang-97156.app.xervo.io/video/browsing.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          <source src="http://creativelang-97156.app.xervo.io/video/browsing.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .video-bg-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    overflow: hidden;
  }
  .video-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(0,0,0,0.7);
    display: table;
  }

  .inner-content {
    width: 100%;
    height: auto;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .inner-content h2 {
    max-width: 40em;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    line-height: 1.3;
    margin: 0 auto;
  }

  .inner-content p {
    padding-top: 1em;
    max-width: 40em;
    margin: 0 auto;
    color: white;
  }

  a.btn-explore {
    display: inline-block;
    margin-top: 25px;
    border: 1px solid #64ffda;
    color: #64ffda;
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
  }

  a.btn-explore span {
    display: inline-block;
    padding: 6px 40px;
    transition: transform 0.4s;
  }

  a.btn-explore .row2 {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(100%);
  }

  a.btn-explore:hover .row1 {
    transform: translateY(-100%);
  }

  a.btn-explore:hover .row2 {
    transform: translateY(0);
  }

  video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translate(-50%, -50%);
    background: url('../assets/browsing.jpg') no-repeat;
    background-size: cover;
    transition: 1s opacity;
  }
</style>
