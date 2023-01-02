<script setup lang="ts">
import { inject } from 'vue'
import { confirm } from 'vue-simple-confirm'

const $confirm = inject(confirm)!

const showPopup = () =>
  $confirm({
    title: 'Title',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    button: {
      yes: 'confirm',
    },
    callback(confirm) {
      if (confirm) alert('You click confirm')
    },
  })
</script>
<template>
  <div>
    <button @click="showPopup">Show</button>
  </div>
  <div id="second"></div>
</template>
<style scoped></style>
