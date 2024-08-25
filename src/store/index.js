import { defineStore } from 'pinia'
import actions from './actions'
export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
    selected: false,
    loading: false
  }),
  getters: {
    store: (state) => state.todos,
    count: (state) => state.todos.length,
    favorites: (state) => state.todos.filter((todo) => todo.isFav === true)
  },
  actions
})
