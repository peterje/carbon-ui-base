<template>
  <v-sheet color="transparent">
    <v-container class="py-6">
      <v-responsive
        max-width="700"
        class="mx-auto text-center"
      >
        <div class="text-overline secondary--text mb-3">
          Account
        </div>
        <h2 class="text-h3 text-lg-h2 mb-4">
          Sign In
        </h2>
      </v-responsive>

      <v-card
        class="pa-2 mx-auto"
        max-width="600"
        color="transparent"
        flat
      >
        <v-card-text>
          <v-form ref="form" :value="valid">
            <v-text-field
              label="Email"
              v-model="email"
              :error="hasError"
              @input="hasError = false"
              solo
              outlined
            />
            <v-text-field
              label="Password"
              type="password"
              solo
              v-model="password"
              :error="hasError"
              outlined
              @input="hasError = false"
            />
          </v-form>
          <v-alert
            v-if="hasError"
            dense
            text
            outlined
            type="error"
          >
            Incorrect login.
          </v-alert>
          <v-btn
            block
            class="primary"
            x-large
            @click="signIn"
          >
            Sign In
          </v-btn>
          <div class="text-center mt-2 text-body-2">
            <router-link to="#">
              Forgot your password?
            </router-link>
          </div>

          <div class="d-flex my-3">
            <v-divider class="my-1"/>
            <div class="text-overline mx-1">
              Or Sign In With
            </div>
            <v-divider class="my-1"/>
          </div>

          <div class="d-flex justify-space-between">
            <v-btn
              outlined
              large
              class="flex-grow-1"
              color="secondary lighten-2"
              @click="signInOAuth"
            >
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-sheet>

</template>

<script>
import firebase from 'firebase/compat'
import { mapGetters } from 'vuex'
import { AuthGetters } from '../store/modules/auth/getters'

export default {
  data() {
    return {
      valid: false,
      password: '',
      email: '',
      hasError: false
    }
  },
  computed:{
    ...mapGetters({ uid: AuthGetters.GET_UID })
  },
  methods: {
    // TODO: Implement 'remember me' persistence
    async signInOAuth() {

      console.log(this.uid)

      this.hasError = false
      const provider = new firebase.auth.GoogleAuthProvider()

      provider.addScope('profile')
      provider.addScope('email')
      try {
        await firebase.auth().signInWithPopup(provider)
        await this.$router.push('/')
      } catch (e) {
        console.log(e.message)
        this.hasError = true
        this.errorText = e.message
      }
    },
    async signIn() {
      this.hasError = false
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        await this.$router.push('/')
      } catch (e) {
        this.errorText = e.message
        this.hasError = true
      }
    }
  }
}
</script>
