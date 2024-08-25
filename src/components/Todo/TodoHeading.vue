<template>
    <div class="w-full flex flex-row justify-end mt-2">
        <div @click="() => todoStore.selected = false"
            class="border border-spacing-1 ml-1 p-2 rounded-md cursor-pointer">All tasks
        </div>
        <div @click="() => todoStore.selected = true"
            class="border border-spacing-1 ml-1 p-2 rounded-md cursor-pointer">Fav tasks
        </div>
    </div>
</template>

<script setup>
import { useTodoStore } from '@/store';
const todoStore = useTodoStore()
</script>