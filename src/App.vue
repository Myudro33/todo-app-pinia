<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import TodosComponent from './components/Todo/TodosContainer.vue';
import { useTodoStore } from './store';
const todoStore = useTodoStore()
todoStore.getTasks()
</script>

<template>
  <HeaderComponent />
  <TodosComponent />
</template>
