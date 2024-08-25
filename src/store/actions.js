export default {
  async getTasks() {
    this.loading = true
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()
    this.todos = data
    this.loading = false
  },
  deleteTodo(id) {
    const filteredTodos = this.store.filter((item) => item.id != id)
    this.todos = filteredTodos
  },
  makeTodoFavorite(id) {
    const favorite = this.todos.findIndex((todo) => todo.id === id)
    this.todos[favorite].isFav = !this.todos[favorite].isFav
  },
  async addTodo(title) {
    this.todos.push({ id: Math.random(), title: title, isFav: false })
    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      body: JSON.stringify({ id: Math.random(), title: title, isFav: false })
    })
  }
}
