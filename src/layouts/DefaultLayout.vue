<template>
  <v-layout>
    <v-main>
      <Toolbar1></Toolbar1>
      <router-view :key="$route.fullPath"></router-view>
      <Footer2></Footer2>
    </v-main>
  </v-layout>
</template>

<script>
import Toolbar1 from '../components/ui/landing/toolbar/Toolbar1'
import Footer2 from '../components/ui/landing/footer/Footer2'
export default {
  name: 'Default',
  components:{
    Toolbar1,
    Footer2
  }
}
</script>
