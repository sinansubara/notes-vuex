<template>
  <div>
    <div class="input-wrap">
      <input type="text" placeholder="Note title" id="inputTitle" class="inputF"
          v-model="note.titleVal"/>
    </div>
    <div class="input-wrap">
      <textarea rows="5" cols="60" class="inputF"
          spellcheck="false" placeholder="Write your note here!"
          v-model="note.noteVal"/>
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
      note: {
        noteVal: '',
        titleVal: '',
      },
    };
  },
  methods: {
    getDate() {
      const date = new Date();
      const mjesec = date.getMonth() + 1;
      const datum = `${date.getDate()}.${mjesec}.${date.getFullYear()}`;
      return datum;
    },
    getTime() {
      const date = new Date();
      const datum = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      return datum;
    },
    add() {
      if (this.note.noteVal !== '' && this.note.titleVal !== '') {
        this.$store.dispatch('dodajNote', {
          note: this.note.noteVal,
          title: this.note.titleVal,
          date: this.getDate(),
          time: this.getTime(),
        });
        this.note.noteVal = '';
        this.note.titleVal = '';
      }
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
