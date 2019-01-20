const store = {
  state: {
    notes: JSON.parse(localStorage.getItem('STORAGE_KEY')) || [],
  },
  actions: {
    dodajNote({ commit }, biljeska) {
      commit('DODAVANJE_BILJESKE', biljeska);
    },
    izbrisiNote({ commit }, index) {
      commit('BRISANJE_BILJESKE', index);
    },
    editujNote({ commit }, [index, novaBiljeska]) {
      commit('MODIFIKACIJA_BILJESKE', [index, novaBiljeska]);
    },
    updateDateTime(index = this.notes.length) {
      const date = new Date();
      const datum = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      const vrijeme = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      this.notes[index].date = datum;
      this.notes[index].time = vrijeme;
    },
  },
  mutations: {
    DODAVANJE_BILJESKE(state, biljeska) {
      state.notes.push(biljeska);
      localStorage.setItem('STORAGE_KEY', JSON.stringify(state.notes));
    },
    BRISANJE_BILJESKE(state, index) {
      state.notes.splice(index, 1);
      localStorage.setItem('STORAGE_KEY', JSON.stringify(state.notes));
      if (state.notes.length === 0) {
        localStorage.removeItem('STORAGE_KEY');
      }
    },
    MODIFIKACIJA_BILJESKE(state, [index, novaBiljeska]) {
      state.notes.splice(index, 1, novaBiljeska);
      window.localStorage.setItem('STORAGE_KEY', JSON.stringify(state.notes));
    },
  },
  getters: {
    listaBiljeski: state => state.notes,
    getDate() {
      const date = new Date();
      const datum = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      return datum;
    },
    getTime() {
      const date = new Date();
      const vrijeme = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      return vrijeme;
    },
  },
};

export default store;
