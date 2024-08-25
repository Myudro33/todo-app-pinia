<template>
    <div class="w-1/2 m-auto flex flex-col">
        <TodoHeading />
        <h1 class="text-left text-gray-500 my-4">you have many todos left :)</h1>
        <TodoComponent />
    </div>
</template>

<script setup>
import TodoHeading from './TodoHeading.vue';
import TodoComponent from './TodoComponent.vue';
</script>