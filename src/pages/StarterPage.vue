<template>
  <div class="my-4">
    <RouletteSpinner :length="38" :roll_time="15"></RouletteSpinner>
  </div>
</template>

<script>
import RouletteSpinner from '../components/games/RouletteSpinner'
import { menu2 as menu } from '../components/ui/landing/toolbar/menus'
export default {
  data() {
    return {
      start_time: Date.now() + (15 * 1000)
    }
  },
  components: {
    RouletteSpinner

  }
}
</script>
