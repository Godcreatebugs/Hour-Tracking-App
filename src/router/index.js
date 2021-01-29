import Vue from 'vue';
import VueRouter from 'vue-router';
import HoursLog from '../views/HoursLog.vue';
import Projects from '../views/Projects.vue';

Vue.use(VueRouter);

// defining routes

const routes = [
  {
    path : '/',
    name : 'HoursLog',
    component : HoursLog
  }

];

const router = new VueRouter({
  routes
});

export default router;
