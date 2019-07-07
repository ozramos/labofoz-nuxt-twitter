export default {
  state () {
    return {
      // The selected tweet "tag" ["BrowseHandsfree", "Handsfree.js", "Misc", "Residency", etc]
      tweetTag: ''
    }
  },

  mutations: {
    setTag (state, tag) {
      state.tweetTag = tag
    }
  }
}