// app.js
App({
  globalData: {
    todos: [
      {
        task: "Aller manger",
        status: "Todo"
      },
      {
        task: "Aller prier",
        status: "Done"
      },
    ],
  },

  addTodo(todo) {
    this.globalData.todos.push({
      task: todo,
      status: "Todo"
    })
  },

  toggle(index){
    this.globalData.todos[index].status = this.globalData.todos[index].status === 'Todo' ? 'Done' : 'Todo';
  },

  delete(index){
    this.globalData.todos.splice(index,1)
  },
})
