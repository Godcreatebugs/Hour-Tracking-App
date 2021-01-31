import Vue from 'vue';
import VueRouter from 'vue-router';
import HoursLog from '@/views/HoursLog.vue';
import Projects from '@/views/Projects.vue';

Vue.use(VueRouter);

// defining routes
// eslint-disable-next-line no-unused-vars
const routes = [
  {
    path : '/',
    name : 'HoursLog',
    component : HoursLog
  },
  {
    path:'/projects',
    name: 'Projects',
    comeponent :Projects
  }
];

const router = new VueRouter({
  routes
});

export default router;
