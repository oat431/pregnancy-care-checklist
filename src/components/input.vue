<script setup lang="ts">
const props = defineProps({
    message : String
});
</script>
<template>
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">{{ props.message }} </span>
            <input type="checkbox" class="checkbox" />
            <input type="checkbox" class="checkbox" />
        </label>
    </div>
</template>
