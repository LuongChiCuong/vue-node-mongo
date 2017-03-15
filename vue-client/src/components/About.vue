<template>
  <div class="about-page">
    <navigation></navigation>
    <div class="video-bg-container">
      <div class="video-content">
        <div class="inner-content">
          <h1>About Me</h1>
          <h2>&ldquo; Learning with passion, working with creativity. &rdquo;</h2>
        </div>
      </div>
        <div class="filter"></div>
        <video autoplay controls="controls" loop class="fillWidth">
            <source src="http://localhost:3000/video/black-key.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src="http://localhost:3000/video/black-key.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    </div>
    <div class="container center-align">
      <div class="row">
        <div class="introduce-content col m6 offset-m3">
          <h3>Who I am?</h3>
          <p>what is the fox say cuong cuong cuong cuong ucong cuong cuong cuong cuong cuong cuong cuongcuong cuong cuong ucong uocng</p>
        </div>
      </div>
    </div>
</div>
</template>
<script>
  import Navigation from './Navigation'

  export default {
    name: 'About',
    components: {
      Navigation
    }
  }
</script>
<style scoped>
  .about-page {
    overflow: hidden;
  }
  .video-bg-container {
    position: relative;
    margin-top: -80px;
  }

  .video-content {
    position: absolute;
    color: white;
    top: 45%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
  .video-content h1{
    font-size: 2rem;
  }
  .video-content h2{
    font-size: 2.5rem;
  }

  video {
    position: relative;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background: url('../assets/black-key.jpg') no-repeat;
    background-size: cover;
    transition: 1s opacity;
  }

  .introduce-content h3{
    font-size: 1.5rem;
  }
  .introduce-content h3::before{
    display: block;
    content: "";
    width: 3px;
    height: 9.6rem;
    background-color: rgba(149, 149, 149, 0.7);
    margin: 0 auto 2rem;
  }
  .introduce-content p {
    font-size: 2.5rem;
  }
</style>
