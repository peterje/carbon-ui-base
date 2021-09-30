<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import config from './configs'
import Toolbar1 from './components/ui/landing/toolbar/Toolbar1'
import Faq1Demo from './components/ui/landing/faq/Faq1Demo'
import Footer2 from './components/ui/landing/footer/Footer2'

/*
|---------------------------------------------------------------------
| Main Application Component
|---------------------------------------------------------------------
*/
export default {
  components:{

  },
  head: {
    link: [
      // adds config/icons into the html head tag
      ...config.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  }
}
</script>
