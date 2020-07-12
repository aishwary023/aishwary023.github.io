<template>
  <div id="app">
    <Home />
    <AboutMe />
    <Projects />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects';

export default {
  name: 'App',
  components: {
    Home,
    AboutMe,
    Projects
  }
};
</script>

<style>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
