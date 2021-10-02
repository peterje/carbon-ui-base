<template>
  <v-row justify="">
    <v-dialog
      v-model="loginDialog"
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
            @click="openSnackbar"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            to="/login"
            @click="loginDialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="text-center">
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        bottom
      >
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-row>
</template>

<script>
import SnackbarPopup from './SnackbarPopup'
export default {
  name: 'LoginPopup',
  methods:{
    openSnackbar() {
      this.loginDialog = false
      this.snackbar = true
    }
  },
  data() {
    return {
      loginDialog: false,
      snackbar: false,
      timeout: 2000,
      text: 'Login Failed. Please Try Again.'
    }
  }
}
</script>

<style scoped>

</style>
