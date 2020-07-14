import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'particles.js';
Vue.config.productionTip = false;

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: { id: 'UA-172619189-1' }
});
new Vue({
  render: (h) => h(App)
}).$mount('#app');
