<template>
    <div class="w-full h-56 bg-red-500 flex flex-col justify-center items-center">
        <div class="flex items-center">
            <img class="w-14 h-20 -rotate-12" src="../../public/favicon.ico" alt="pinia logo">
            <h1 class="text-5xl font-bold ml-2">Pinia Tasks</h1>
        </div>
        <div class="mt-3">
            <form @submit.prevent="todoStore.addTodo(value)">
                <input v-model="value" class="bg-white h-10 rounded-lg p-2 outline-none" type="text" name="todo">
                <button @click="clearInput" class="bg-yellow-500 ml-3 w-28 h-10 rounded-lg text-white">Add</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useTodoStore } from '@/store';
import { ref } from 'vue';
const value = ref('')
const todoStore = useTodoStore()
const clearInput = () => {
    setTimeout(() => {
        value.value = ''
    });
}
</script>