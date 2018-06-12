
new Vue({
    el: '#exercise',
    data: {
        name: 'John Doe',
        age: '35',
        image: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        multiplyAge: function() {
            return this.age * 3;
        },
        getRandom: function() {
            return Math.random();
        }
    }
});
