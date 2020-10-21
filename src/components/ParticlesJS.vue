<template>
  <div id="particles-js" style="height:100vh;"></div>
</template>

<script>
import json from './particle-js.json';
export default {
  name: 'ParticlesJS',
  mounted() {
    require('particles.js');
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },

  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS('particles-js', json);
    }
  }
};
</script>

<style>
#particles-js {
  width: 100%;
  height: 100%;
  background: #000000;
}
</style>
