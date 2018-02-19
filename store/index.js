export const state = () => ({
  locales: ['en', 'ar'],
  locale: 'en',
  searchResults: []
})

export const getters = {
  getSearchResults (state) {
    return state.searchResults
  }
}

export const actions = {
  async fetchSearchResults ({commit}, payload) {
  const results = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/')
  console.log('results: ', results)
  commit('SET_SEARCH_RESULTS', results)
  }
}

export const mutations = {
  SET_LANG(state, locale) {
    console.log('here', locale)
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
      console.log('set', state.locale)
    }
  },
  SET_SEARCH_RESULTS (state, payload) {
    state.searchResults = payload
  }
}
