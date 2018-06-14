
new Vue({
    el: '#app', 
    data: {
        title: 'Hello World!',
        link: 'http://www.google.ca'
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});
