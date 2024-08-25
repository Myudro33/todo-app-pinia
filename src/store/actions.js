export default {
  deleteTodo(id) {
    const filteredTodos = this.store.filter((item) => item.id != id)
    this.todos = filteredTodos
  },
  makeTodoFavorite(id) {
    const favorite = this.todos.findIndex((todo) => todo.id === id)
    this.todos[favorite].isFav = !this.todos[favorite].isFav
  },
  addTodo(title) {
    this.todos.push({ id: Math.random(), title: title, isFav: false })
    title = ''
  }
}
