<template>
  <button @click="showPopup">Show</button>
  <Dialog />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { confirm } from 'vue-simple-dialog'

export default defineComponent({
  inject: {
    confirm: {
      from: confirm,
    },
  },
  methods: {
    showPopup() {
      this.confirm({
        title: 'Title',
        message: 'message',
        button: {
          yes: 'yes',
          no: 'no',
        },
        callback(confirm) {
          if (confirm) alert('Ok')
        },
      })
    },
  },
})
</script>
