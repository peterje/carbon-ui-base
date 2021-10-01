<template>
  <div>
    <RouletteSpinner :length="38" :roll_time="15"></RouletteSpinner>
    <Toolbar1></Toolbar1>
    <Footer2></Footer2>

  </div>
</template>

<script>
import Toolbar1 from '../components/ui/landing/toolbar/Toolbar1'
import Footer2 from '../components/ui/landing/footer/Footer2'
import RouletteSpinner from '../components/games/RouletteSpinner'
import { menu2 as menu } from '../components/ui/landing/toolbar/menus'
export default {
  data() {
    return {
      start_time: Date.now() + (15 * 1000)
    }
  },
  components: {
    Toolbar1,
    Footer2,
    RouletteSpinner

  }
}
</script>
