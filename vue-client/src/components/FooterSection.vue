<template>
  <footer class="skills left-align grey darken-4">
      <div class="skills-content container">
          <div class="row">
              <div class="footer-column col m4 white-text">
                  <h4>Site Map</h4>
              </div>
              <div class="footer-column col m4 white-text">
                  <h4>Keep Working</h4>
                  <ul>
                      <li v-for="skill in workingSkills">
                          <i class="small material-icons">done</i>
                          <span>{{skill.name}}</span>
                      </li>
                  </ul>
              </div>
              <div class="footer-column col m4 white-text">
                  <h4>Still Learning</h4>
                  <ul>
                      <li v-for="skill in learningSkills">
                          <i class="small material-icons">trending_up</i>
                          <span>{{skill.name}}</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="made-by center-align white">
        <p>Made with <b class="heart">&#10084;</b> by luongchicuong93@gmail.com - Powered by VueJS - NodeJS - MongoDB - WebPack</p>
      </div>
  </footer>
</template>

<script>
  let oldSkill = [
    {name: 'HTML5', color: 'red-text text-darken-1'},
    {name: 'CSS3/Less/Sass', color: 'blue-text text-darken-1'},
    {name: 'Materialize CSS', color: 'red-text text-lighten-2'},
    {name: 'Javascript', color: 'yellow-text text-lighten-1'},
    {name: 'AngularJS', color: 'red-text text-darken-3'},
    {name: 'Jquery', color: 'blue-text text-lighten-1'},
    {name: 'Ruby on Rails', color: 'red-text text-darken-3'},
    {name: 'MySQL', color: 'blue-text'}
  ]
  let newSkill = [
    {name: 'VueJS', color: 'red-text text-darken-1'},
    {name: 'NodeJS', color: 'blue-text text-darken-1'},
    {name: 'ExpressJS', color: 'red-text text-lighten-2'},
    {name: 'MongoDB', color: 'yellow-text text-lighten-1'},
    {name: 'Pixi.js', color: 'red-text text-darken-3'},
    {name: 'Three.js', color: 'blue-text text-lighten-1'}
  ]
  export default {
    name: 'FooterSection',
    data () {
      return {
        workingSkills: oldSkill,
        learningSkills: newSkill
      }
    }
  }
</script>

<style>
  /*#map {
    width: 100%;
    height: 400px;
    background-color: grey;
  }*/
  .skills {
      background: url('../assets/mountain.png') repeat-x;
      opacity: 0.9;
  }
  .skills h4 {
      font-size: 1.5rem;
  }
  .skills .skills-content {
    min-height: 200px;
    padding: 30px 0;
  }
  .footer-column ul li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  .footer-column ul li span{
    margin-left: 10px;
  }
  .footer-column ul li a{
    margin-left: 10px;
  }
    /* The animation code */
  .made-by p{
    margin: 0;
    padding: 10px 0;
  }
  @keyframes color-heart {
      from {color: #e53935 ;}
      to {color: #ff8a80;}
  }
  .made-by b {
    animation-name: color-heart;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

</style>
