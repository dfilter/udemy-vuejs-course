export const reverseStringMixin = {
    computed: {
        stringLengthMxn() {
            let value = 'Hello World!'
            return value + ' (' + value.length + ')'
        }
    }
}