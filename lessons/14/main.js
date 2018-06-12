
var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'The VueJS Instance'
    },
    beforeCreate: function() {
        console.log('"beforeCreate()" Called');
    },
    created: function() {
        console.log('"created()" Called');
    },
    beforeMount: function() {
        console.log('"beforeMount()" Called');
    },
    mounted: function() {
        console.log('"mounted()" Called');
    },
    beforeUpdate: function() {
        console.log('"beforeUpdate()" Called');
    },
    updated: function() {
        console.log('"updated()" Called');
    },
    beforeDestroy: function() {
        console.log('"beforeDestroy()" Called');
    },
    destroyed: function() {
        console.log('"destroyed()" Called');
    },
    methods: {
        destroy: function() {
            this.$destroy();
        }
    }
});