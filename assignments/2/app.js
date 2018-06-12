new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function() {
                alert('This is the alert!');
            },
            storeInput: function(event) {
                this.value = event.target.value;
            }
        }
    });