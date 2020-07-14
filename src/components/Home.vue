<template>
  <div id="home">
    <Navbar />
    <div id="landing-intro">
      <div text="Hi,">Hi, I'm</div>
      <div id="my-name" text="I'm Aishwary">Aishwary</div>
      <div id="sub-intro">
        <glitch text="Student | Developer | Tech Enthusiast"></glitch>
      </div>

      <span style="font-size:1.5rem">Welcome to my website!</span>
    </div>
    <ParticlesJS />
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
<style scoped>
#landing-intro {
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 3rem;
  font-weight: 500;
  font-family: 'Futura', monospace;
  text-transform: uppercase;
}
#sub-intro {
  font-size: 20px;
  font-weight: 100;
  opacity: 0.75;
}
#my-name {
  font-size: 5rem;
  font-weight: 900;
}
@media (max-width: 768px) {
  #my-name {
    font-size: 3.6rem;
    font-weight: 900;
  }
  #landing-intro {
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 2.2rem;
    font-weight: 400;
    font-family: 'Futura', monospace;
    text-transform: uppercase;
  }
  #sub-intro {
    font-size: 18px;
    font-weight: 100;
    opacity: 0.75;
    width: 350px !important;
  }
  .glitch-wrapper > .glitch {
    background: transparent !important;
  }
}

.glitch-wrapper > .glitch {
  background: transparent !important;
}
</style>
