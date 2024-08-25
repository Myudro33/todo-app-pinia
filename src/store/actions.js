export default {
  async getTasks() {
    this.loading = true
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()
    this.todos = data
    this.loading = false
  },
  async deleteTodo(id) {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' })
      const filteredTodos = this.store.filter((item) => item.id != id)
      this.todos = filteredTodos
    } catch (error) {
      alert(error)
    }
  },
  async makeTodoFavorite(id) {
    const favorite = this.todos.findIndex((todo) => todo.id === id)
    this.todos[favorite].isFav = !this.todos[favorite].isFav
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...this.todos[favorite], isFav: this.todos[favorite].isFav })
    }
    await fetch(`http://localhost:3000/tasks/${id}`, requestOptions)
  },
  async addTodo(title) {
    try {
      const randomId = String(Math.floor(Math.random() * 999999))
      this.todos.push({ id: randomId, title: title, isFav: false })
      await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify({
          id: randomId,
          title: title,
          isFav: false
        })
      })
    } catch (error) {
      alert(error)
    }
  }
}
