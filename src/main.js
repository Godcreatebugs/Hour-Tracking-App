import Vue from 'vue';
import vSelect from 'vue-select';
import DatePicker from 'DatePicker';
import PouchDB from 'pouchDB';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'vue-select/dist/vue-select.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue2-datepicker/index.css';
Vue.component('date-picker', DatePicker);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.component('v-select', vSelect);
import App from './App.vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;

// pouchdb instance

var db = new PouchDB('timeEntry');
var db = new PouchDB('projectENtry');
// PochDB.debug.enable('*');

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,

  render: function (hyperscript) {
    return hyperscript(App);
  }
}).$mount('#app');
