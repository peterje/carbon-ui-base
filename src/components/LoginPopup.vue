<template>
  <v-row justify="">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Login
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Login
        </v-card-title>
        <v-card-text>Please agree to our terms of service.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
            to="/login"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import SnackbarPopup from './SnackbarPopup'
export default {
  name: 'LoginPopup',
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>

</style>
