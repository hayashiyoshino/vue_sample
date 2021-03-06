

var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function (event) {
      if (this.newItem == "") return;
      var todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem: function(index) {
      alert((index+1)  + "番のメモを削除します。よろしいですか？");
      this.todos.splice(index, 1);
    }
  }
})

