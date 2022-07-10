<template>
  <div id="app">
    <b-nav card-header tabs>
      <b-nav-item>LOGO</b-nav-item>
  


      <b-nav-item v-if="$store.state.reachResult">prev</b-nav-item>
      <b-nav-item v-if="$store.state.reachResult">{{ $route.params.id }}/10</b-nav-item>
      <b-nav-item v-if="$store.state.reachResult">next</b-nav-item>
            
      <b-nav-item to="/result" :disabled="$store.state.reachResult"
        >Result</b-nav-item
      >
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<style>

</style>
