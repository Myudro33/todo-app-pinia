<template>
    <div class="w-full h-20 border rounded-md shadow-md p-5 flex justify-between">
        <h1 class="text-xl font-bold">{{ props.title }}</h1>
        <div class="flex w-20 h-10 justify-end">
            <img class="cursor-pointer w-8 h-8" src="../../../public/trash-can.png" alt="">
            <img class="cursor-pointer w-8 h-8 ml-2"
                :src="props.isFav ? '../../../public/solid-heart.png' : '../../../public/clear-heart.png'" alt="heart">
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['id', 'title', 'isFav'])
</script>