<template>
    <div class="w-full h-20 my-2 border rounded-md shadow-md p-5 flex justify-between">
        <h1 class="text-xl font-bold">{{ props.title }}</h1>
        <div class="flex w-20 h-10 justify-end">
            <img @click="todoStore.deleteTodo(props.id)" class="cursor-pointer w-8 h-8"
                src="../../../public/trash-can.png" alt="trashcan">
            <img @click="todoStore.makeTodoFavorite(props.id)" class="cursor-pointer w-8 h-8 ml-2"
                :src="props.isFav ? 'https://github.com/Myudro33/todo-app-pinia/blob/main/public/solid-heart.png?raw=true' : 'https://github.com/Myudro33/todo-app-pinia/blob/main/public/clear-heart.png?raw=true'"
                alt="heart">
        </div>
    </div>
</template>

<script setup>
import { useTodoStore } from '@/store';
const props = defineProps(['id', 'title', 'isFav'])
const todoStore = useTodoStore()
</script>