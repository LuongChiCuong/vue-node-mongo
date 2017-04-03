<template>
  <div class="ebook-page">
    <navigation></navigation>
    <div class="banner grey valign-wrapper">
      <h1 class="get-in-touch center-align valign">Free IT Ebook</h1>
    </div>
    <div class="ebook-section container">
      <div class="row">
        <h2 class="center-align">My Favorite Ebook</h2>
        <h3 class="center-align">Because of the license, so I cannot open download URL for you.</h3>
        <div class="underline center-align">
            <span>&nbsp;</span>
        </div>
      </div>
      <div class="row list-book">
        <ul>
            <li class="col s12 m3 l2 book-content center-align" v-for="book in ebooks">
                <img :src="require(`../assets/img/${book.img}`)" :alt="book.title" class="cover-book">
                <b class="title">{{book.title}}</b>
            </li>
        </ul>
      </div>
    </div>
    <FooterSection></FooterSection>
</div>
</template>
<script>
  import Navigation from './Navigation'
  import FooterSection from './FooterSection'
  export default {
    name: 'Ebook',
    data () {
      return {
        ebooks: []
      }
    },
    methods: {
      loadEbooks: function () {
        var api = 'http://creativelang-97156.app.xervo.io/ebooks'
        // var api = 'http://localhost:3000/ebooks'
        this.$http.get(api).then((res) => {
          this.ebooks = res.body
        }, (err) => {
          console.log(err)
        })
      }
    },
    mounted: function () {
      this.loadEbooks()
    },
    components: {
      Navigation, FooterSection
    }
  }
</script>

<style lang="less" scoped>
  .ebook-page {
    overflow: hidden;
  }

  .banner {
    height: 550px;
    width: 100%;
    margin-top: -30px;
    background: url('../assets/book-shelf-bg.jpg') center no-repeat;
    background-size:cover;
    .get-in-touch {
      font-size: 3rem;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      padding: 50px 70px;
      &:after {
        content: '';
        position: absolute;
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
        display: block;
        border: 1px solid white;
        z-index: 1;
        -webkit-transition: .5s ease;
        transition: .5s ease;
      }
     &:hover {
       &:after {
         top: -12px;
         left: -12px;
         right: -12px;
         bottom: -12px;
         opacity: 0;
       }
     }
    }
  }
  .ebook-section {
    padding: 50px 0;
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
    .underline {
      position: relative;
      span{
          width: 120px;
          height: 2px;
          position: absolute;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          background-color: black;
      }
    }
    .list-book{
      margin: 25px 0;
      .book-content {
        min-height: 350px;
        .cover-book {
          width: 100%;
          height: 250px;
        }
      }
    }
  }
  /*.ebook-section {
    padding: 70px;
  }
  .ebook-section h3 {
    font-size: 2.0rem;
    position: relative;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    display: inline-block;
    margin-bottom: 20px;
    color: #64ffda;
  }
  .ebook-section h3::after {
    content: '';
    position: absolute;
    left: 10px;
    bottom: -14px;
    border: 7px solid transparent;
    border-top-color: #000;
  }
  .ebook-section ul li {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .avatar {
    width: 100%;
    margin-top: 30px;
  }

  #map {
    width: 100%;
    height: 400px;
    background-color: grey;
  }*/
</style>
