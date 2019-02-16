<template>
  <div id="app">
    <img alt="Note maker logo" src="./assets/logo_note.png">
    <InputFields />
    <NotesDisplay />
  </div>
</template>
<script>
import InputFields from './components/InputFields.vue';
import NotesDisplay from './components/NotesDisplay.vue';

export default {
  name: 'app',
  components: {
    InputFields,
    NotesDisplay,
  },
};
</script>
<style lang="scss">
body {
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
