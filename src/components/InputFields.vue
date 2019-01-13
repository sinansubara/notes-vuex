<template>
  <div>
    <div class="input-wrap">
      <input type="text" placeholder="Note title" id="inputTitle" class="inputF"
          v-model="noteTitle" @keyup="changeNote" />
    </div>
    <div class="input-wrap">
      <textarea rows="5" cols="60" class="inputF"
          spellcheck="false" placeholder="Write your note here!"
          v-model="noteVal" @keyup="changeNote" />
    </div>
    <div class="input-wrap">
      <span @click="add" class="button add">ADD NOTE</span>
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
      required: true,
    },
  },
  methods: {
    getDate() {
      const date = new Date();
      const mjesec = date.getMonth() + 1;
      //  const datum = date.getDate() + '.' + mjesec + '.' + date.getFullYear();
      const datum = `${date.getDate()}.${mjesec}.${date.getFullYear()}`;
      return datum;
    },
    getTime() {
      const date = new Date();
      //  const datum = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      const datum = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      return datum;
    },
    add() {
      this.addNote();
      if (this.noteVal !== '' && this.noteTitle !== '') {
        this.noteVal = '';
        this.noteTitle = '';
        this.parentChangeMethod({
          title: this.noteTitle,
          note: this.noteVal,
        });
      }
    },
    changeNote() {
      this.parentChangeMethod({
        title: this.noteTitle,
        note: this.noteVal,
        date: this.getDate(),
        time: this.getTime(),
      });
    },
  },
};
</script>
<style lang="scss">
  .input-wrap {
    padding: 5px;
  }
  .inputF {
    font-size: 20px;
    border: none;
    padding: 1px 0 0 10px;
  }
  textarea {
    resize: none;
  }
  #inputTitle {
    width: 20%;
    margin-top: 30px;
  }
</style>
