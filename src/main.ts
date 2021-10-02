import Vue from 'vue'
import App from './App.vue'

// VUEX - https://vuex.vuejs.org/

// VUE-ROUTER - https://router.vuejs.org/
import router from './router'

// PLUGINS
import vuetify from './plugins/vuetify'
import './plugins/vue-head'
// import './plugins/vue-gtag'

//VUEX
import store from '@/store'

// FIREBASE
import firebase from 'firebase/compat'
import { firebaseConfig } from '@/configs/firebase'

// Initialize firebase
const app = firebase.initializeApp(firebaseConfig)

// FILTERS
import './filters/capitalize'
import './filters/lowercase'
import './filters/uppercase'
import './filters/placeholder'
import './filters/trim'
import './filters/formatDate'

// STYLES
// Main Theme SCSS
import './assets/scss/theme.scss'
import { AuthActions } from '@/store/modules/auth/actions'

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false

/*
|---------------------------------------------------------------------
| Main Vue Instance
|---------------------------------------------------------------------
|
| Render the vue application on the <div id="app"></div> in index.html
|
| https://vuejs.org/v2/guide/instance.html
|
*/

firebase.auth().onAuthStateChanged(async (user: firebase.User | null) => {
  if (user) {
    await store.dispatch(AuthActions.SET_UID, user.uid)
  } else {
    await store.dispatch(AuthActions.SET_UID, '')
  }
})

export default new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
