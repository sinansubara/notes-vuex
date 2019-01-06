<template>
  <div id="app">
    <InputFields
      :add-note="addNote"
      :parent-change-method="changeNoteValue" />
    <NotesDisplay
      :notes-to-be-displayed="notes"
      :parent-remove-method="removeNote" />
  </div>
</template>

<script>
import InputFields from './components/InputFields.vue';
import NotesDisplay from './components/NotesDisplay.vue';

export default {
  name: 'app',
  data() {
    return {
      note: {
        title: '',
        note: '',
      },
      notes: [],
    };
  },
  components: {
    InputFields,
    NotesDisplay,
  },
  methods: {
    addNote() {
      /* this.notes.push(this.note);
      this.note = {
        title: '',
        note: '',
      }; */
      this.notes.push(this.note);
      window.localStorage.setItem('nesto',JSON.stringify(this.notes));
      
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    changeNoteValue(newNote) {
      this.note = newNote;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
