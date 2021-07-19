export const state = () => ({
  user: {
    uid: '',
    email: '',
    name: '',
    photoURL: '',
  },
})

export const getters = {
  user: (state) => {
    return state.user
  },
}

export const actions = {}

export const mutations = {}