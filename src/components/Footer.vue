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
        >
          <v-icon size="24px">
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
  export default {
    data: () => ({
      icons: [
        'mdi-github',
        'mdi-discord',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
    .footer {
      background: rgb(2,0,36);
      background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(50,109,190,1) 48%, rgba(0,212,255,1) 100%);
      width: 100%;
    }
</style>