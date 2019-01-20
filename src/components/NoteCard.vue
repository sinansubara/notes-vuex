<template>
  <div id="notecard">
    <span class="cardTitle">{{singelNote.title}}</span><hr><br>
    <span class="articleText" v-show="!(singelNote.note === editNote)">{{ singelNote.note }}</span>
    <textarea type="text" v-model.lazy="singelNote.note" rows="5" cols="25"
        spellcheck="false" class="inputF"
        @change="write"
        @blur="doneEdit(index)"
        v-show="singelNote.note === editNote" /><br><br><hr>
        <div class="card-footer">
        <span>{{singelNote.date}}</span> |
        <span>{{singelNote.time}}</span>
        </div>
    <span @click="izbrisi(index)" class="button delete">DELETE</span>
    <span @click="edit()" class="button edit">EDIT</span>
  </div>
</template>
<script>
export default {
  name: 'NoteCard',
  data() {
    return {
      editNote: '',
    };
  },
  props: {
    singelNote: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
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
    izbrisi(index) {
      this.$store.dispatch('izbrisiNote', index);
    },
    write() {
      this.editNote = this.singelNote.note;
    },
    edit() {
      this.editNote = this.singelNote.note;
    },
    doneEdit(index) {
      const temp = {
        note: this.editNote,
        title: this.singelNote.title,
        date: this.getDate(),
        time: this.getTime(),
      };
      this.$store.dispatch('editujNote', [index, temp]);
      this.editNote = '';
    },
  },
};
</script>
<style lang="scss">
  #notecard {
    width: 375px;
    background-color: #2B3252;
    color: #FAD744;
    box-shadow: 0px 7px 11px 0px black;
    transition: 0.3s;
    margin: 30px;
    padding: 1em;
    .cardTitle {
      font-weight: 600;
      font-size: 2em;
      margin-bottom: 2em;
    }
  }
  #notecard:hover {
      box-shadow: 0px 10px 20px 0px black;
    }
  span {
    word-wrap: break-word;
  }
  .button {
    display: inline-block;
    white-space: nowrap;
    background-color: #ccc;
    background-image: linear-gradient(to bottom, #eee, #ccc);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#eeeeee',
            EndColorStr='#cccccc');
    border: 1px solid #777;
    padding: 0 1.5em;
    margin: 0.5em;
    font: bold 1em/2em Arial, Helvetica;
    text-decoration: none;
    color: #333;
    text-shadow: 0 1px 0 rgba(255,255,255,.8);
    border-radius: .2em;
    box-shadow: 0 0 1px 1px rgba(255,255,255,.8) inset, 0 1px 0 rgba(0,0,0,.3);
  }
  .button:hover {
    background-color: #ddd;
    background-image: linear-gradient(to bottom, #fafafa, #ddd);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#fafafa',
          EndColorStr='#dddddd');
    cursor: pointer;
  }
  .button:active {
    box-shadow: 0 0 4px 2px rgba(0,0,0,.3) inset;
    position: relative;
    top: 1px;
  }
  .button:focus {
    outline: 0;
    background: #fafafa;
  }
  .button:before {
    background: #ccc;
    background: rgba(0,0,0,.1);
    float: left;
    width: 1em;
    text-align: center;
    font-size: 1.5em;
    margin: 0 1em 0 -1em;
    padding: 0 .2em;
    box-shadow: 1px 0 0 rgba(0,0,0,.5), 2px 0 0 rgba(255,255,255,.5);
    border-radius: .15em 0 0 .15em;
    pointer-events: none;
  }
  .add:before {
      content: "\271A";
  }
  .edit:before {
      content: "\270E";
  }
  .delete:before {
    content: "\2718";
  }
  .card-footer {
    margin-top: 2em;
    font-size: 0.9em;
  }
  .articleText {
    font-size: 1.2em;
  }
</style>
