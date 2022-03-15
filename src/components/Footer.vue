<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center footer"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          :href="links"
          target="_blank"
        >
          <v-icon 
          size="24px"
          large
          >
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 footer">
        wayde@lagrandeur.ca
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
//import router from '../router/router'
  export default {
    data: () => ({
      icons: [
        'mdi-github',
        'mdi-discord',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      links: [
        'https://github.com/WaydeLagrandeur',
        'https://www.discordapp.com/users/148168038687047680',
        'https://www.linkedin.com/in/wayde-l/',
        'https://www.instagram.com/thekoolwaydeman/'
      ]
    }),

    // methods: {
    //   pushSite() {
    //     router.push('www.wikipedia.org');
    //   }
    // }
  }
</script>

<style scoped>
    .footer {
      background: rgb(2,0,36);
      background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(50,109,190,1) 48%, rgba(0,212,255,1) 100%);
      width: 100%;
      padding-top: 2vh;
    }
</style>