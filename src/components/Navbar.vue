<template>
  <nav
    :class="{ change_color: scrollPosition > 50 }"
    class="navbar fixed-top navbar-expand-lg black-bg"
    id="navigation-bar"
  >
    <a href class="navbar-brand">
      <img
        src="../assets/logo.png"
        alt="Aishwary Saxena"
        id="brand-icon"
        style="transform: scale(0.8)"
      />
    </a>

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
      <i
        class="material-icons"
        :class="{ change_text_color: scrollPosition > 50 }"
        id="hamburger"
      >{{ icon }}</i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" :class="{ active: scrollPosition < 380 }">
          <a
            :class="{ change_text_color: scrollPosition > 50 }"
            class="nav-link"
            href="#"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggle()"
            id="home-btn"
            v-scroll-to="{
              el: '#home',
              offset: -115
            }"
          >Home</a>
        </li>
        <li class="nav-item" :class="{ active: scrollPosition > 340 && scrollPosition < 980 }">
          <a
            :class="{ change_text_color: scrollPosition > 50 }"
            class="nav-link"
            href="#"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggle()"
            id="about-btn"
            v-scroll-to="{
              el: '#about',
              offset: -125
            }"
          >About Me</a>
        </li>
        <li class="nav-item" :class="{ active: scrollPosition > 940 }" style="margin-right:10px">
          <a
            :class="{ change_text_color: scrollPosition > 50 }"
            class="nav-link"
            href="#"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggle()"
            id="projects-btn"
            v-scroll-to="{
              el: '#projects',
              offset: -125
            }"
          >Projects</a>
        </li>

        <div class="row">
          <div class="col-6">
            <li class="nav-item" style="margin:10px 0">
              <a
                id="dev_cv"
                class="nav-link btn btn-light"
                :class="{ change_dev_cv_text_color: scrollPosition > 50 }"
                href="https://aishwary023.github.io/assets/dev_cv_aishwary.png"
                target="_blank"
                style="text-transform:none"
              >&lt;DevCv/&gt;</a>
            </li>
          </div>
          <div class="col-6">
            <li style="margin:10px 0" class="nav-item">
              <a
                id="resume"
                class="nav-link btn btn-outline-dark"
                :class="{ change_resume_text_color: scrollPosition > 50 }"
                href="https://drive.google.com/file/d/1i-IjETYsAf6Ex6STP1jxfB4Ft2QVYZPW/view?usp=sharing"
                target="_blank"
              >Resume</a>
            </li>
          </div>
        </div>
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

      if (
        document
          .getElementById('navigation-bar')
          .classList.contains('border-btm')
      ) {
        document
          .getElementById('navigation-bar')
          .classList.remove('border-btm');
      } else {
        document.getElementById('navigation-bar').classList.add('border-btm');
      }
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
.border-btm {
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
#resume {
  color: #ffffff;
  background-color: #343a40 !important;
}
#dev_cv {
  color: #000000;
}
.change_dev_cv_text_color {
  background-color: #ffffff !important;
  border-color: #000000;
}
@media (min-width: 768px) {
  .active > a {
    transition: all 0.2s;
    border-top: 4px solid #ff0000;
  }
}
@media (max-width: 768px) {
  .change_resume_text_color {
    color: #000000 !important;
  }
  .change_dev_cv_text_color {
    color: #ffffff !important;
    background-color: #000000 !important;
    border-color: #000000;
  }
  nav {
    padding-top: 0;
    padding-bottom: 5px;
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-color: #000000;
    padding: 0;
  }
  #brand-icon {
    transform: scale(1);
    width: 173.6px;
    height: 71.2px;
  }

  a {
    color: #ffffff;
  }

  #resume {
    background-color: transparent !important;
    color: #ffffff;
    border-color: #000000;
    margin-right: 10px;
  }
  #dev_cv {
    margin-left: 10px;
  }
  .active > a {
    transition: all 0.2s;
    border-left: 4px solid #ff0000;
  }
}
.change_color {
  transition: all 0.5s;
  background-color: white;
  color: #000000;
  border-bottom: 1px solid #e7eaec;
}
.change_text_color {
  color: #000000 !important;
}
</style>
