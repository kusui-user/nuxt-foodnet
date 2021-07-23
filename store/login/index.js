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

export const actions = {
  login({ context }, payload) {
    this.$fire.auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(user) //eslint-disable-line
        this.$router.push('/')
      })
      .catch((error) => {
        console.log('エラーです') //eslint-disable-line
        console.log(error) //eslint-disable-line
      })
  },
  register({ context }, payload) {
    this.$fire.auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
  },
  async loginGoogle({ context }) {
    try {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      await this.$fire.auth.signInWithPopup(provider).then(() => {
        // dispatch('checkLogin')
        this.$router.push('/')
      })
    } catch (error) {
      console.log(error) //eslint-disable-line
    }
  },
}

export const mutations = {}