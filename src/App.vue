<template>
  <v-app id='app'>
    <AppBar />  
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
export default {
  name: 'App',
  components: {
    AppBar
  }
};
</script>

<style scoped>
  #app {
    background: rgb(2,0,36);
    background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(50,109,190,1) 48%, rgba(0,212,255,1) 100%);
    margin: 0px; 
  }
</style>
