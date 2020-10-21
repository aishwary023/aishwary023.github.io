<template>
  <div class="container" id="projects">
    <span>
      <h3>Projects</h3>
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
                :src="require('../assets/' + card.imgSrc)"
                style="border-radius:50%;"
                height="150px"
                width="150px"
              />
            </p>
            <h4 class="card-title">{{ card.title }}</h4>
            <hr />
            <p class="card-text">{{ card.description }}</p>
            <span class="mt-auto">
              <a
                class="github-icon"
                :href="card.repoLink"
                target="_blank"
                title="Repository"
                style="margin:10px 15px 10px 15px"
              >
                <img height="40" src="../assets/github.svg" />
              </a>
              <a
                class="github-icon"
                :href="card.deployLink"
                target="_blank"
                title="Repository"
                style="margin:10px 15px 10px 15px"
              >
                <img height="32" src="../assets/link.svg" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from '../json-data/projects.json';
export default {
  data() {
    return {
      projectList: json
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
  border: 1px solid #000000;
}
.card:hover {
  margin: 15px 15px 15px 15px !important;
  border: 1px solid #000000;
  box-shadow: 6px 7px 10px 0px #e0dede;
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
.card-title {
  font-family: 'Futura';
}
.card-text {
  text-align: justify;
}
</style>
