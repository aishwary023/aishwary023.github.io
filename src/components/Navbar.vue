<template>
  <nav
    :class="{ change_color: scrollPosition > 50 }"
    class=" navbar fixed-top navbar-expand-lg "
  >
    <a
      :class="{ change_text_color: scrollPosition > 50 }"
      class="navbar-brand"
      href="#"
      >AS</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggle()"
      style="outline:none;"
    >
      <i class="material-icons" id="hamburger">{{ icon }}</i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li
          class="nav-item"
          :class="{ active: isActive('home') }"
          @click="setActive('home')"
        >
          <a
            :class="{ change_text_color: scrollPosition > 50 }"
            class="nav-link"
            href="#"
            id="home-btn"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            @click="toggle()"
            v-scroll-to="{
              el: '#home',
              offset: -115
            }"
            >Home</a
          >
        </li>
        <li
          class="nav-item"
          :class="{ active: isActive('about') }"
          @click="setActive('about')"
        >
          <a
            :class="{ change_text_color: scrollPosition > 50 }"
            class="nav-link"
            href="#"
            id="about-btn"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            @click="toggle()"
            v-scroll-to="{
              el: '#about',
              offset: -115
            }"
            >About Me</a
          >
        </li>
        <li
          class="nav-item"
          :class="{ active: isActive('projects') }"
          @click="setActive('projects')"
        >
          <a
            :class="{ change_text_color: scrollPosition > 50 }"
            class="nav-link"
            href="#"
            id="projects-btn"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            @click="toggle()"
            v-scroll-to="{
              el: '#projects',
              offset: -115
            }"
            >Projects</a
          >
        </li>
        <li class="nav-item">
          <label class="nav-link btn btn-outline-dark" href="#">Resume</label>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      icon: 'menu',
      scrollPosition: null,
      activeItem: 'home'
    };
  },
  methods: {
    toggle() {
      this.icon = this.icon === 'menu' ? 'close' : 'menu';
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  watch: {
    scrollPosition() {}
  }
};
</script>

<style scoped>
a {
  color: #ffffff;
}
.nav-link {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
}
.nav-item {
  margin: 10px;
}
a:hover {
  color: #9b005f;
}

#hamburger {
  color: #ffffff;
}
label {
  color: #ffffff !important;
  background-color: #343a40 !important;
}

@media (min-width: 768px) {
  .active > a {
    border-top: 2px solid #ff0000;
  }
}
@media (max-width: 768px) {
  nav {
    padding-top: 0;
    padding-bottom: 5px;
    border-radius: 0;
    background-color: #ffffff;
    border-color: #ffffff;
  }

  #hamburger,
  a {
    color: #000000;
  }
  label {
    background-color: transparent !important;
    color: #000000 !important;
  }
  .active > a {
    border-left: 4px solid #ff0000;
  }
}
@media (min-width: 768px) {
  .change_color {
    transition: all 0.5s;
    background-color: white;
    color: #000000;
    border-bottom: 1px solid #e7eaec;
  }
  .change_text_color {
    color: #000000;
  }
}
</style>
