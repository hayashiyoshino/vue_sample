Vue.component('hello-component', {template: '<p>HELLO</p>'})

var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function (event) {
            alert();
        }
    }
})

