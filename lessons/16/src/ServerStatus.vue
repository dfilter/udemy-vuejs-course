<template>
<!-- make sure to always have one parent element inside of the template, failing to do so will give compile errors. -->
<div>
    <h1>Server Status: {{ status }}</h1>
    <hr>
    <button @click="changeStatus">change Status</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus() {
        this.status = 'Normal'
    }
  }
}
</script>

<style>

</style>
