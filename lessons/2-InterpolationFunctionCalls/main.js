
new Vue({
    el: '#app', 
    data: {
        title: 'Hello World!'
    },
    methods: {
        /**
         * This function will render the data in the dom correctly since it is a 
         * string. If however if it is anything other then a string it will throw 
         * an error.
         */
        sayHello: function() {
            return this.title;
        }
    }
});
