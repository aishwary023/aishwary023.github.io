<template>
  <div id="app">
    <loading
      :active.sync="isLoading"
      :is-full-page="fullPage"
      :transition="'fade'"
      :color="'#f11'"
      :background-color="'RGBA(0,0,0)'"
      :height="100"
      :width="100"
      :opacity="0.1"
      :loader="'dots'"
    ></loading>
    <div>
      <transition name="fade">
        <Home v-if="about" />
      </transition>
      <transition name="fade">
        <AboutMe v-if="about" />
      </transition>

      <Projects v-if="about" />

      <Footer v-if="about"></Footer>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';

import Loading from 'vue-loading-overlay';

import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'App',
  data: () => {
    return {
      isLoading: true,
      fullPage: true,
      about: false
    };
  },
  components: {
    Home,
    AboutMe,
    Projects,
    Loading,
    Footer
  },
  mounted: function() {
    let vm = this;
    this.$nextTick(function() {
      setTimeout(function() {
        vm.isLoading = false;
        setTimeout(function() {
          vm.about = true;
          vm.project = true;
        }, 100);
      }, 900);
    });
  }
};
</script>

<style>
@font-face {
  font-family: 'Futura';
  src: local('Futura'), url(./fonts/Futura.woff) format('woff');
}

@font-face {
  font-family: 'Audrey-Normal';
  src: local('Audrey-Normal'), url(./fonts/Audrey-Normal.otf) format('opentype');
}
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  /* margin-top: 60px; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
