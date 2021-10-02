<template>
  <v-container>
    <v-row>
      <v-card class="reel d-flex d-inline-flex justify-start align-center overflow-hidden transparent" flat height="90">
        <v-card
          v-for="i in length*5"
          :key="i"
          ref="cards-1"
          :color="i%38==0 ? 'green' : (i%2==0 ? 'red' : 'black')"
          min-width="70"
          height="70"
          flat
          class="card d-flex justify-center align-center"
        >
        </v-card>
      </v-card>
    </v-row>
    <v-row class="d-flex text-center justify-center my-8">
      <h1>Spinning In : {{seconds_to_roll > 0 ? seconds_to_roll : 0}} seconds</h1>
      <v-progress-linear v-model="time" height="25" ></v-progress-linear>
    </v-row>

    <v-row class="d-flex">
        <div class="d-flex align-center grow">
          <v-text-field prepend-inner-icon="mdi-currency-usd" label="Bet amount" hide-details ></v-text-field>
          <div class="d-flex">
            <v-btn v-for="i in 7" :key="i" class="mx-1">Last</v-btn>
          </div>
        </div>
    </v-row>

    <v-row>
      <v-col v-for="i in 3" :key="i" class="d-flex flex-column">
        <v-card color="transparent" outlined class="player-bet-section">
          <v-btn
            :color="i==1 ? 'red' : ( i==2 ? 'green' : 'grey')"
            outlined
            class="my-2"
            x-large
            text>Place bet</v-btn>
          <div class="pa-2 d-flex flex-column subtitle-1">
            <div class="d-flex justify-space-between">
              <div >1 Bet</div>
              <div >2 Dollars</div>
            </div>
            <div>
              <v-card
                v-for="j in 5"
                :key="j"
                color="transparent"
                outlined
                :class="card_index_to_class(i)">
                <span>Player</span>
                <span>Bet</span>
              </v-card>
            </div>
          </div>
        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import countdown from 'countdown'

@Component
class RouletteSpinner extends Vue {
  @Prop({ type: Number, required: true }) readonly length: number
  @Prop({ type: Number, required: true }) readonly roll_time: number
  countdown_start: number
  countdown_end: Date
  countdown: any
  seconds_to_roll = 0

  time = 10

  cards_to_pixels(num_cards: number) :number {
    return -(70 * num_cards) - (4 * 2 * num_cards)
  }

  card_index_to_class(i: number) {
    let base = 'd-flex justify-space-between subtitle-1 font-weight-medium pa-1 my-1 '

    if (i === 1) {
      base += 'player-bet-r'
    } else if (i === 2) {
      base += 'player-bet-g'
    } else {
      base += 'player-bet-b'
    }

    return base
  }

  created() : void {
    this.start_timer()
  }

  start_timer() {
    this.countdown_end = new Date()
    this.seconds_to_roll = this.roll_time
    this.countdown_end.setSeconds(this.countdown_end.getSeconds() + this.roll_time)
    this.countdown = countdown(this.countdown_end, this.update_timer, countdown.SECONDS)
  }

  update_timer(t: any): void {
    const now = new Date()

    this.time = (this.countdown_end.getTime() - now.getTime()) / (this.roll_time * 10)
    this.seconds_to_roll--
    if (this.time <= 0) {
      clearInterval(this.countdown)
      this.spin()
    }
  }

  mounted() {
    const cards  = this.$refs['cards-1']
    const first_card = cards[0].$el
    const new_margin = this.cards_to_pixels(38)

    first_card.style.marginLeft = `${new_margin}px`
  }

  spin() {
    const goal_number = 1
    const cards  = this.$refs['cards-1']
    const first_card = cards[0].$el

    first_card.style.transition = `margin-left ${7}s cubic-bezier(0.215, 0.61, 0.355, 1)`
    first_card.style.marginLeft = `${this.cards_to_pixels(38 * 3) + this.cards_to_pixels(goal_number - 9) + 4}px`

    for (const card of this.$refs['cards-1']) {
      const el = card.$el

      el.style.opacity = '0.5'
    }

    first_card.distance_moved = goal_number - 9
    first_card.addEventListener('transitionend', this.post_spin_movement)
  }

  post_spin_movement(e: TransitionEvent) {
    this.start_timer()
    this.seconds_to_roll = this.roll_time
    for (const card of this.$refs['cards-1']) {
      const el = card.$el

      el.style.opacity = '1'
    }
    const element! = e.target

    element.style.transition = ''
    const new_margin = this.cards_to_pixels(element.distance_moved) + this.cards_to_pixels(38)

    element.style.marginLeft = `${new_margin + 2}px`
    element.removeEventListener('transitionend', this.post_spin_movement)
  }

}

export default RouletteSpinner
</script>

<style scoped>
.card{
  margin-left: 4px;
  margin-right: 4px;
}
.player-bet-r{
  border: thin solid #f44336 !important;
}
.player-bet-g{
  border: thin solid #4caf50 !important;
}
.player-bet-b{
  border: thin solid #9e9e9e !important;
}

.wrapper{
  max-width: 1330px
}
</style>
