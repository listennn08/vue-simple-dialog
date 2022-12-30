<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { confirm } from 'vue-simple-dialog'

const $confirm = inject(confirm)!

const showPopup = () =>
  $confirm({
    title: 'Title',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    button: {
      yes: 'Good',
    },
    callback(confirm) {
      if (confirm) alert('Ok')
    },
  })
</script>
<template>
  <div>
    <button @click="showPopup">Show</button>
    <Dialog />
  </div>
  <div id="second"></div>
</template>
<style scoped></style>
