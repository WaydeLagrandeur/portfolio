import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import router from './router/router'
import VueAnime from './plugins/VueAnime.js'
import VueMq from './plugins/vue-mq'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  VueAnime,
  VueMq,
  render: h => h(App)
}).$mount('#app')
