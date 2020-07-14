import Vue from 'vue';
import App from './App.vue';

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
