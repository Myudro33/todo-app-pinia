import { defineStore } from 'pinia'
import actions from './actions'
export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [
      { id: 1, title: 'nika1', isFav: false },
      { id: 2, title: 'nika2', isFav: true },
      { id: 3, title: 'nika3', isFav: false }
    ],
    selected: false
  }),
  getters: {
    store: (state) => state.todos,
    count: (state) => state.todos.length,
    favorites: (state) => state.todos.filter((todo) => todo.isFav === true)
  },
  actions
})
