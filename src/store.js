const store = {
  state: {
    notes: [],
  },
  actions: {
    dodajNote({ commit }, biljeska) {
      commit('DODAVANJE_BILJESKE', biljeska);
    },
  },
  mutations: {
    DODAVANJE_BILJESKE(state, biljeska) {
      state.notes.push(biljeska);
    },
  },
  getters: {
    listaBiljeski: state => state.notes,
  },
};

export default store;
