<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-button v-b-toggle.sidebar>Menu</b-button>
    <b-navbar-brand class="ml-4" href="#">NavBar</b-navbar-brand>
  </b-navbar>

    <b-sidebar id="sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>

    </div>
    <img
      src="@/assets/logo.png"
      alt="Vue.js logo"
      title="Vue.js"
      class="logo"
    />
    <img
      src="@/assets/nw.png"
      alt="NW.js logo"
      title="NW.js"
      class="logo"
    />
    <HelloWorld msg="Welcome to your Vue.js Desktop App in NW.js!" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  margin-top: 0px;
  color: #2C3E50;
  font-family: 'Avenir', sans-serif;
  text-align: center;
}
.logo {
  max-height: 140px;
  margin: 0px 10px;
}
</style>
