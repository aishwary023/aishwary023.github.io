<template>
  <div class="container" id="projects">
    <span>
      <h3>
        Projects
      </h3>
    </span>
    <hr />

    <div class="row">
      <div
        class="col-md-4 d-flex align-items-stretch"
        v-for="(card, key) in projectList"
        :key="key"
      >
        <div class="card">
          <div class="card-body text-center d-flex flex-column">
            <p>
              <img
                :src="card.imgSrc"
                style="border-radius:50%;"
                height="150px"
                width="150px"
              />
            </p>
            <h4 class="card-title">{{ card.title }}</h4>
            <hr />
            <p class="card-text">
              {{ card.description }}
            </p>
            <span class="mt-auto">
              <a
                class="github-icon"
                :href="card.repoLink"
                target="_blank"
                title="Repository"
                style="margin:auto 15px auto 15px"
                ><img
                  height="40"
                  src="https://image.flaticon.com/icons/svg/2111/2111425.svg"
              /></a>
              <a
                class="github-icon "
                :href="card.deployLink"
                target="_blank"
                title="Repository"
                style="margin:auto 15px auto 15px"
                ><img
                  height="32"
                  src="https://image.flaticon.com/icons/svg/1946/1946473.svg"
              /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectList: [
        {
          imgSrc: require('../assets/drf.jpg'),
          title: 'VocalForLocal - Backend',
          description:
            'Backend of VocalForLocal website, made with Django REST Framework.',
          repoLink: '',
          deployLink: ''
        },
        {
          imgSrc: require('../assets/vfl.png'),
          title: 'VocalForLocal - Frontend',
          description:
            'Created a website for local vendors who do not have the means to advertize themselves or even have their own shop. Made using vanilla JS and Bulma framework. Backend was made with Django REST API.. Made with Vanilla JS and Bulma CSS',
          repoLink: '',
          deployLink: ''
        },
        {
          imgSrc: require('../assets/spotify.png'),
          title: 'Spotify Search Recommendations',
          description:
            'Created a website with Bootstrap and vanilla JS, to recommend Playlists/Albums along with search functionality AJAX with Spotify API. Made using HTML, CSS, JavaScript and Bootstrap@4.4.1',
          repoLink: '',
          deployLink: ''
        },
        {
          imgSrc: 'https://picsum.photos/200/300',
          title: 'Portfolio',
          description: 'Portfolio website created with VueJS and Bootstrap.',
          repoLink: '',
          deployLink: ''
        },
        {
          imgSrc: require('../assets/vue.png'),
          title: 'VueYourWeather',
          description:
            'Simple weather app built in VueJS using OpenWeather.org API. My first Vue app.',
          repoLink: '',
          deployLink: ''
        },
        {
          imgSrc: require('../assets/tictactoe.png'),
          title: 'TicTacToe',
          description:
            'Webapp to play tic-tac-toe game as multiplayer or with unbeatable bot implementing minimax algorithm.',
          repoLink: '',
          deployLink: ''
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
#projects {
  margin: auto auto 150px auto;
}
.card {
  margin: 15px 15px 15px 15px !important;
  border: 1px solid #ff0000;
}
.card:hover {
  margin: 15px 15px 15px 15px !important;
  border: 1px solid #ff0000;
  box-shadow: 6px 7px 10px 0px #facaca;
  transition: all ease 0.5s;
}
hr {
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: #ff0000;
  height: 1px;
}
</style>
