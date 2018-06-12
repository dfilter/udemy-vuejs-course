<template>
    <div>
        <div class="title">
            <!-- slots are used to render html passed from outside the componant. 
            The name attribute is used to determine what parts of the html passed \
            to this component are rendered where. -->
            <slot name="title"></slot>
            <span class="subtitle"><slot name="subtitle">The Subtitle</slot></span>
        </div>
        <hr>
        <div>
            <!-- unnamed slots are treated as the default slot. Any remaining 
            content will be rendered inside of this this slot. -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
div {
    border: 1px soldi #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}
/* the child component will be responsible for applying css styles */
.subtitle{
    background-color: #ccc;
}
.title {
    font-style: italic;
}
h1 {
  color: red;
}
</style>
