<script setup lang="ts">
const props = defineProps({
    result: String
})
</script>
<template>
    <div class="text-center mt-6">
        <h1 class="text-2xl font-bold">ผลการประเมิน</h1>
        <div class="divider"></div>
        <h1 class="text-xl font-bold mt-6">"{{ props.result }}"</h1>
    </div>
</template>
