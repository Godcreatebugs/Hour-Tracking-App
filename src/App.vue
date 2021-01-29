<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-button v-b-toggle.sidebar>Menu</b-button>
    <b-navbar-brand class="ml-4" href="#">NavBar</b-navbar-brand>
  </b-navbar>

    <b-sidebar id="sidebar" title="Main Menu" shadow>
      <div class="px-3 py-2">
        <b-list-group>
           <b-list-group-item href="/">
             Hours Log
           </b-list-group-item>
           <b-list-group-item href="/">
              Projects
           </b-list-group-item>
           ​<div class="dropdown-divider"></div>
           <b-list-group-item href="/">
             Exports
           </b-list-group-item>
           <b-list-group-item href="/">
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
.logo {
  max-height: 140px;
  margin: 0px 10px;
}
</style>
