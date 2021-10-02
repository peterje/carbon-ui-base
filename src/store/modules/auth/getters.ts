import { GetterTree } from 'vuex'
import { AuthState } from '@/store/modules/auth/types'
import { RootState } from '@/store/types'

export enum AuthGetters {
  GET_UID = 'GET_UID'
}

export const getters: GetterTree<AuthState, RootState> = {
  [AuthGetters.GET_UID](state : AuthState): string {
    return state.uid
  }
}
