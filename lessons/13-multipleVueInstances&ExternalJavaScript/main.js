// The data property used in the vue instance can be defined outside of it
var data = {
    title: 'The VueJS Instance',
    showParagraph: false
}

/*
Vue.component('hello', {
    template: '<h1>Hello!</h1>'
});
*/

var vm1 = new Vue({
    data: data,
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated');
            this.$refs.myButton.innerText = 'Test';  // accessing html element using "ref" directive
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title changed new value: ' + value);
        }
    }
});

// this function allows the vuejs el property to be set outside of the vue instance.
vm1.$mount('#app1');

console.log(vm1.$data);
// note that this will edit the html dom but will not edit the vuejs template
// also note that this is not reactive.
vm1.$refs.heading.innerText = 'Changed from outside vue instance';


setTimeout(function() {
    vm1.title = 'Changed by outer Timer';  // altering a variable from outside vue isntance
    vm1.show();  // calling a method from outside the vue istance
}, 3000);

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The second Instance'
    },
    methods: {
        onChange: function() {
            vm1.title = 'Changed by vm2';
        }
    }
});

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});

vm3.$mount();
// can be done but not the best option
document.getElementById('app3').appendChild(vm3.$el);
