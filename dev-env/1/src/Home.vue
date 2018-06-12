<template>
<!-- make sure to always have one parent element inside of the template, failing to do so will give compile errors. -->
<div>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
</div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'

export default {
  components: {
    'app-server-status': ServerStatus
  }
}
</script>

<style>

</style>
