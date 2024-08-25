import { useTodoStore } from './index'
export default {
  deleteTodo(id) {
    const todoStore = useTodoStore()
    const filteredTodos = this.store.filter((item) => item.id != id)
    todoStore.todos = filteredTodos
  }
}
