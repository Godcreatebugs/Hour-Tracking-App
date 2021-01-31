<template lan="ht">
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-button v-b-toggle.sidebar>Menu</b-button>
    <b-navbar-brand class="ml-4" href="#">NavBar</b-navbar-brand>
  </b-navbar>

    <b-sidebar id="sidebar" title="Main Menu" shadow>
      <div class="px-3 py-2">
        <b-list-group>
           <b-list-group-item href="/#/">
            Hours
          </b-list-group-item>
          <b-list-group-item href="/#/projects">
              Projects
           </b-list-group-item>
           ​<div class="dropdown-divider"></div>
           <b-list-group-item >
             Exports
           </b-list-group-item>
           <b-list-group-item >
             Settings
           </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
    <router-view />
  </div>
</template>


<style>
#app {
  margin-top: 0px;
  color: #2C3E50;
  font-family: 'Avenir', sans-serif;
  text-align: center;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
