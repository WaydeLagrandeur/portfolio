import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        mobile: 600,
        // tablet: 900,
        // laptop: 1250,
        desktop: Infinity,
    }
  })

  export default {
      name: 'VueMq'
  }