import types from './mutation_types';

export default {
  dodajNote({ commit }, biljeska) {
    commit(types.DODAVANJE_BILJESKE, biljeska);
  },
  izbrisiNote({ commit }, index) {
    commit(types.BRISANJE_BILJESKE, index);
  },
  editujNote({ commit }, [index, novaBiljeska]) {
    commit(types.MODIFIKOVANJE_BILJESKE, [index, novaBiljeska]);
  },
};
