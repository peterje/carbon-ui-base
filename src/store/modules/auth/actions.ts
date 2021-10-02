import { ActionTree } from 'vuex'
import { AuthState } from '@/store/modules/auth/types'
import { RootState } from '@/store/types'
import { AuthMutations } from '@/store/modules/auth/mutations'

export enum AuthActions {
  SET_UID = 'SET_UID'
}

export const actions : ActionTree<AuthState, RootState> = {
  [AuthActions.SET_UID]({ commit }, new_uid: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    commit(AuthMutations.SET_UID, new_uid)
  }
}
