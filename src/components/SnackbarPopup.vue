<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
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
</template>

<script>
import LoginPopup from './LoginPopup'
// class SnackbarPopup extends LoginPopup {
//   closeLoginDialog() {
//     LoginPopup.loginDialog = false
//   }

export default {
  name: 'SnackbarPopup',
  data() {
    return {
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000
    }
  }

}
</script>

<style scoped>

</style>
