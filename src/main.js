import Vue from 'vue';
import App from './App.vue';
import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
  id: 'UA-172619189-1'
});

Vue.config.productionTip = false;

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
