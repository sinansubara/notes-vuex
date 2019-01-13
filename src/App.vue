<template>
  <div id="app">
    <img alt="Note maker logo" src="./assets/logo_note.png">
    <InputFields
      :add-note="addNote"
      :parent-change-method="changeNoteValue" />
    <NotesDisplay
      :notes-to-be-displayed="notes"
      :parent-remove-method="removeNote"
      :parent-change-method="changeNoteValue"
      :parent-edit-method="editNote" />
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
      if (this.note.note !== '' && this.note.title !== '') {
        if (this.notes === null) {
          this.notes = [];
        }
        this.notes.push(this.note);
        window.localStorage.setItem('temp', JSON.stringify(this.notes));
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1);
      window.localStorage.setItem('temp', JSON.stringify(this.notes));
      if (this.notes.length === 0) {
        localStorage.removeItem('temp');
      }
    },
    changeNoteValue(newNote) {
      this.note = newNote;
    },
    editNote(index, /* newTitle, */ newNote) {
      /* this.notes[index].title = newTitle; */
      this.notes[index].note = newNote;
      window.localStorage.setItem('temp', JSON.stringify(this.notes));
    },
  },
  mounted() {
    this.notes = JSON.parse(window.localStorage.getItem('temp'));
  },
};
</script>
<style lang="scss">
body {
  /* background: url("./assets/hand.jpg");
  background-size: cover;
  background-repeat: no-repeat; */
  background-color: #EF5455;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
