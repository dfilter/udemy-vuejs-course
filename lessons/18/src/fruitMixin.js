export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        // instead of using a filter we filter the array using a computed property
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText)
            })
        }
    },
    created() {
        console.log('Created mixin')
    }
}