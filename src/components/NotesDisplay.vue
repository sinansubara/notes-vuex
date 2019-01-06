<template>
  <div>
    <div
      v-for="(singelNote, index) in notesToBeDisplayed"
      :key="index">
      <div class="input-wrap">
        <span>Title: {{singelNote.title}}</span>
      </div>
      {{ singelNote.note }}
      <div @click="parentRemoveMethod(index)"> X </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotesDisplay',
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
  },
};
</script>
<style lang="scss" scoped>

</style>
