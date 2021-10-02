import { MutationTree } from 'vuex'
import { AuthState } from '@/store/modules/auth/types'

export enum AuthMutations {
  SET_UID = 'SET_UID'
}

export const mutations: MutationTree<AuthState> = {
  [AuthMutations.SET_UID](state, uid: string) {
    state.uid = uid
  }
}
