import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [
      { id: 1, title: 'nika1', isFav: false },
      { id: 2, title: 'nika2', isFav: true },
      { id: 3, title: 'nika3', isFav: false }
    ]
  }),
  getters: {
    store: (state) => state.todos
  }
})
