<template>
    <div>
        <slot name="header-b"></slot>
        <hr>
        <slot name="content"></slot>
        <hr>
        <slot name="footer"></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>