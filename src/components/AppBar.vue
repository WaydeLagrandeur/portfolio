<template>
  <v-card
    class="mx-auto overflow-hidden bar"
    width="100%"
    height="100%"
  >

    <v-app-bar
      class="bar"
      dark
      prominent
      height="62px"
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      top
      temporary
      class="nav-drawer"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >        
          
            <router-link to="/" class="nav-link"><v-list-item><v-list-item-title>Home</v-list-item-title></v-list-item></router-link>
            <router-link to="/resume" class="nav-link"><v-list-item><v-list-item-title>Resume</v-list-item-title></v-list-item></router-link>
            <router-link to="/projects" class="nav-link"><v-list-item><v-list-item-title>Projects</v-list-item-title></v-list-item></router-link>
          

          <!-- <v-list-item>
            <router-link to="/resume" class="nav-link"><v-list-item-title>Resume</v-list-item-title></router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/projects" class="nav-link"><v-list-item-title>Projects</v-list-item-title></router-link>
          </v-list-item> -->

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <router-view />
    <Footer />
  </v-card>
</template>

<script>
import Footer from './Footer.vue'
export default {
    name: 'AppBar',
    components: {
      Footer
    },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style scoped>
    .nav-link {
      text-decoration: none;
      margin: auto;
      text-align: center;
    }
    .bar {
      background: rgb(2,0,36);
      background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(50,109,190,1) 48%, rgba(0,212,255,1) 100%);
    }
    .nav-drawer {
      background: rgb(2,0,36);
      background: linear-gradient(315deg, rgba(12,10,46,1) 0%, rgba(50,109,190,1) 48%, rgba(0,212,255,1) 100%);
    }
</style>