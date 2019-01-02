var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js!'
    toggle: true,
    object: {
      firstName: 'Hayashi',
      lastName: 'Yoshino'
    }
  },
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
