<template>
  <div>
    <div class="input-wrap">
      <input type="text" v-model="noteTitle" @keyup="changeNote" />
    </div>
    <div class="input-wrap">
      <input type="textarea" v-model="noteVal" @keyup="changeNote" />
    </div>
    <div class="input-wrap">
      <button @click="add">Add note</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputFields',
  data() {
    return {
      noteVal: '',
      noteTitle: '',
    };
  },
  props: {
    addNote: {
      type: Function,
      required: true,
    },
    parentChangeMethod: {
      type: Function,
      reguired: true,
    },
  },
  methods: {
    add() {
      this.addNote();
      this.noteVal = '';
      this.noteTitle = '';
    },
    changeNote() {
      this.parentChangeMethod({
        title: this.noteTitle,
        note: this.noteVal,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .input-wrap {
    padding: 5px;
  }
</style>
