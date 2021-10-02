import { AuthState } from '@/store/modules/auth/types'
import { RootState } from '@/store/types'
import { Module } from 'vuex'
import { actions } from '@/store/modules/auth/actions'
import { mutations } from '@/store/modules/auth/mutations'
import { getters } from '@/store/modules/auth/getters'

const state : AuthState = {
  uid: undefined,
  is_auth: false
}

export const auth : Module<AuthState, RootState> =  {
  state,
  getters,
  mutations,
  actions
}
