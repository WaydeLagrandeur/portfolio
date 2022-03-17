<template>
    <div>
        <v-carousel
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
    >
        <v-carousel-item
        v-for="i in 5"
        :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
      <img :src="imageURL[i]" />
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 subtitle">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
    </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        imageURL: [
          '../assets/SpamBot.png',
          '../assets/CSB.png',
          '../assets/AboutPage.png',
          '../assets/dtech.png',
          '../assets/bship.png'
        ]
      }
    },
    // props: {
    //   title: String,
    //   imagePath: String,
    //   subtitle: String,
    // }
  }
</script>

