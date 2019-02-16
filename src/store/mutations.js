import types from './mutation_types';

export default {
  [types.DODAVANJE_BILJESKE](state, biljeska) {
    state.notes.push(biljeska);
    localStorage.setItem('STORAGE_KEY', JSON.stringify(state.notes));
  },
  [types.BRISANJE_BILJESKE](state, index) {
    state.notes.splice(index, 1);
    localStorage.setItem('STORAGE_KEY', JSON.stringify(state.notes));
    if (state.notes.length === 0) {
      localStorage.removeItem('STORAGE_KEY');
    }
  },
  [types.MODIFIKOVANJE_BILJESKE](state, [index, novaBiljeska]) {
    state.notes.splice(index, 1, novaBiljeska);
    window.localStorage.setItem('STORAGE_KEY', JSON.stringify(state.notes));
  },
};
