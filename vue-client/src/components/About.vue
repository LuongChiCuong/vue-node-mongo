<template>
  <div class="about-page">
    <navigation></navigation>
    <div class="video-bg-container">
      <div class="video-content">
        <div class="inner-content">
          <h1>About Me</h1>
          <h2>&ldquo; Be a Creative Front End developer. &rdquo;</h2>
        </div>
      </div>
        <div class="filter"></div>
        <video autoplay controls="controls" loop class="fillWidth">
            <!-- <source src="http://localhost:3000/video/black-key.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src="http://localhost:3000/video/black-key.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. -->
            <source src="http://creativelang-97156.app.xervo.io/video/black-key.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src="http://creativelang-97156.app.xervo.io/video/black-key.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    </div>
    <div class="container center-align">
      <div class="row">
        <div class="introduce-content col m8 offset-m2">
          <h3>Who I am?</h3>
          <p>
              My name is Cuong, with a special passion for <mark><b>Front End Developer</b></mark>.</br>
              I created this website with the purpose of sharing my knowledge and passion for everyone.</br>
              My target is to become a <mark><b>creative front end</b></mark>, why? Because I want to directly develop ideas with <mark>my creativity</mark>,
              I do not want to be limited in thinking and only following designers or marketing.</br>
              If you also like <mark>Front End</mark>, we will prove to the fucking developers who think FE is simple and easy that <mark><b>FE is an art</b></mark>.
          </p>
          <div class="resume">
            <p>*For more information, please take a look at</p>
            <a href="https://1drv.ms/b/s!AsP4GkXBYgLKxkFvrzPiJh0Qp7yt" target="_blank">My Resume</a>
          </div>
        </div>
      </div>
    </div>
    <FooterSection></footerSection>
</div>
</template>
<script>
  import Navigation from './Navigation'
  import FooterSection from './FooterSection'
  export default {
    name: 'About',
    components: {
      Navigation, FooterSection
    }
  }
</script>
<style lang="less" scoped>
  .about-page {
    overflow: hidden;
    .video-bg-container {
      position: relative;
      margin-top: -80px;
      .video-content {
        position: absolute;
        color: white;
        top: 45%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        .inner-content {
          h1{
            font-size: 2rem;
          }
          h2{
            font-size: 2.5rem;
          }
        }

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
    }
  }

  .introduce-content {
    margin-bottom: 120px;
    h3{
      font-size: 1.5rem;
      &:before {
        display: block;
        content: "";
        width: 3px;
        height: 9.6rem;
        background-color: rgba(149, 149, 149, 0.7);
        margin: 0 auto 2rem;
      }
    }
    p {
      font-size: 2.0rem;
      mark{
        background-color: #64ffda;
      }
    }
    .resume {
      p {
        font-size: 1.5rem;
      }
      a {
        display: inline-block;
        width: 200px;
        height: 50px;
        border: 1px solid black;
        vertical-align: middle;
        line-height: 48px;
        color: black;
      }
    }
  }
</style>
