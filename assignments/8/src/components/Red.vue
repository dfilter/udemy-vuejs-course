<template>
    <div>
        <slot name="header-r"></slot>
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
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>