// defineing a data object like this will share the data between vue instances since it takes up the same space in memory.
//var data = { status: 'Critical' }

//Vue.component.. <-- this is to register the vue componant globally
var cmp = {
    data: function() {
        return {
            status: 'Critical'  // if the data object is defined like this the data will not be shared between componant insances.
        };
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
};

new Vue({
    el: '#app1',
    // this is how you register a componant locally
    components: {
        'my-cmp': cmp
    }
});

new Vue({
    el: '#app2'
});
