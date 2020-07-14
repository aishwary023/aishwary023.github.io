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
      :z-index="9999"
      :loader="'dots'"
    ></loading>
    <div>
      <transition name="fade">
        <Home v-if="about" />
      </transition>
      <transition name="fade">
        <AboutMe v-if="about" />
      </transition>
      <transition name="fade">
        <Projects v-if="about" />
      </transition>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects';

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
    Loading
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
