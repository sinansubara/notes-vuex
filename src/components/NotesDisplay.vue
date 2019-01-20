<template>
  <div id="notesdisplay">
    <div
      v-for="(singelNote, index) in vuexNotes"
      :key="index">
      <NoteCard
      :singel-note="singelNote"
      :index="index" /><br>
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
    justify-content: space-between;
  }
</style>
