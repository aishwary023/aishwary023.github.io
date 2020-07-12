<template>
  <div class="container" id="projects">
    <span>
      <h3>
        Projects
      </h3>
    </span>
    <hr />
    <body>
      <div class="row">
        <div
          class="col-md-4"
          v-for="(card, index) in 6"
          :key="index"
          style="margin: 5px auto 5px auto"
        >
          <div class="card" style="width: 100%;">
            <img
              class="card-img-top"
              src="https://picsum.photos/seed/picsum/150/75"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#projects {
  margin: auto auto 150px auto;
}
</style>
