
new Vue({
    /**
     * The "el" property of the vue instance object points to the containing 
     * element wich this vue instance handles.
     * The "data" property contains any variables we want to define for 
     * later use in this vue instance. In this case the title.
     * The "methods" property contains any functions we want to use in our 
     * project here it updates the title when the user enters characters into
     * the input field.
     */
    el: '#app', 
    data: {
        title: 'Hello World!'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
});
