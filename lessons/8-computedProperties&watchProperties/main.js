
new Vue({
    el: '#app', 
    data: {
        counter: 0,
        secondCounter: 0
    },
    methods: {
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5';
        }
    },
    computed: {
        // computed propries allways run synchronously, asynchronous tasks cannot be
        // run in a computed property.
        output: function() {
            console.log('Computed');
            return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5';
        }
    },
    watch: {
        // Unlike computed properties watch will allow for asynchronous tasks
        // watch counter, this will react each time the counter variable changes
        counter: function(value) {
            // since the setTimeout function below as a callback you will need 
            // to store the vue instance.
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    }
});
