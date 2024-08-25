<template>
    <div class="w-1/2 m-auto flex flex-col">
        <TodoHeading />
        <h1 class="text-left text-gray-500 my-4">you have {{ todoStore.count }} todos left :)</h1>
        <TodoComponent v-for="item in todoStore.store" :key="item.id" :id="item.id" :title="item.title"
            :isFav="item.isFav" />
    </div>
</template>

<script setup>
import TodoHeading from './TodoHeading.vue';
import TodoComponent from './TodoComponent.vue';
import { useTodoStore } from '@/store/index';
const todoStore = useTodoStore()
</script>