import Vue from 'vue';
import vSelect from 'vue-select';
import DatePicker from 'vue2-datepicker';



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-select/dist/vue-select.css';
import 'vue2-datepicker/index.css';

// router and store import
import App from './App.vue';
import router from './router';
import store from './store';



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.component('v-select', vSelect);
Vue.component('date-picker', DatePicker);

Vue.config.productionTip = false;


// PochDB.debug.enable('*');

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,

  render: function (hyperscript) {
    return hyperscript(App);
  }
}).$mount('#app');
