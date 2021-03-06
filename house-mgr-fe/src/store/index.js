import { createStore } from 'vuex';
import { character, user } from '@/service';
import { getCharacterInfoById } from '@/helpers/character'
import { result } from '@/helpers/utils'

export default createStore({
  state: {
    characterInfo: {},
    userInfo: {},
    userCharacter: {},
  },
  mutations: {

    setCharacterInfo(state, characterInfo) {
      state.characterInfo = characterInfo
    },

    setUserCharacter(state, userCharacter) {
      state.userCharacter = userCharacter
    },

    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },

  },
  actions: {

    async getCharacterInfo(store) {
      const res = await character.list()
      result(res)
        .success(({ data }) => {
          store.commit('setCharacterInfo', data)
        })
    },

    async getUserInfo(store) {
      const res = await user.info()
      result(res)
        .success(({ data }) => {
          store.commit('setUserInfo', data)
          store.commit('setUserCharacter', getCharacterInfoById(data.character))
        })
    },

  },
});
