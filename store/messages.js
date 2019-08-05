export const state = () => ({
  messages: []
})

export const mutations = {
  ADD_MESSAGE (state, payload) {
    state.messages.push(payload)
  }
}

export const actions = {
  addMessage ({ commit }, message) {
    commit('ADD_MESSAGE', message)
  }
}

export const getters = {

}
