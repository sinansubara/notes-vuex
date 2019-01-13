<template>
  <div id="notesdisplay">
    <div
      v-for="(singelNote, index) in vuexNotes"
      :key="index">
      <NoteCard
      :singel-note="singelNote"
      :index="index"
      :parent-remove-method="parentRemoveMethod"
      :parent-change-method="parentChangeMethod"
      :parent-edit-method="parentEditMethod" /><br>
    </div>
  </div>
</template>
<script>
import NoteCard from './NoteCard.vue';

export default {
  name: 'NotesDisplay',
  data() {
    return {
      activeEdit: '',
    };
  },
  props: {
    notesToBeDisplayed: {
      type: Array,
      required: false,
      default: () => [],
    },
    parentRemoveMethod: {
      type: Function,
      required: true,
    },
    parentChangeMethod: {
      type: Function,
      reguired: true,
    },
    parentEditMethod: {
      type: Function,
      required: true,
    },
  },
  components: {
    NoteCard,
  },
  methods: {
  },
  computed: {
    vuexNotes() {
      return this.$store.getters.listaBiljeski;
    },
  },
};
</script>
<style lang="scss" scoped>
  #notesdisplay {
    display: flex;
    flex-flow: row wrap;
    /* align-content: space-between; */
    justify-content: space-between;
  }
</style>
