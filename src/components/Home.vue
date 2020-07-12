<template>
  <div id="home">
    <Navbar />
    <div id="landing-intro">
      <glitch text="Hi,"></glitch>
      <glitch text="I'm Aishwary"></glitch>

      <div id="about">
        <glitch text="Student | Developer | Tech Enthusiast"></glitch>
      </div>
    </div>
    <ParticlesJS />
    <br />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import ParticlesJS from './ParticlesJS.vue';
import Glitch from 'vue-glitch';
export default {
  components: {
    Navbar,
    ParticlesJS,
    Glitch
  }
};
</script>

<style>
#landing-intro {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 3rem;
  font-weight: 500;
  font-family: 'Source Code Pro', monospace;
  text-transform: uppercase;
}
#about {
  font-size: 20px;
  font-weight: 100;
  opacity: 0.75;
}

@media (max-width: 768px) {
  #landing-intro {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Source Code Pro', monospace;
    text-transform: uppercase;
  }
  #about {
    font-size: 15px;
    font-weight: 100;
    opacity: 0.75;
    width: 350px !important;
  }
}
.glitch-wrapper > .glitch {
  background: transparent !important;
}
</style>
