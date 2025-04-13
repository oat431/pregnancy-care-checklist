<script setup lang="ts">
import { onMounted } from "vue";
const props = defineProps({
    result: String,
    tel: String,
    referTo: String,
    isEmergency : Boolean
})
onMounted(() => {
    window.scrollTo(0, document.body.scrollHeight);
})
</script>
<template>
    <div class="text-center mt-6">
        <h1 class="text-2xl font-bold">ผลการประเมิน</h1>
        <div class="divider"></div>
        <h1 v-if="!isEmergency" class="text-xl font-bold mt-6 text-green-600">
            "{{ props.result }} 
            <a href="tel:{{ props.tel }}">
                <u> {{ props.tel }}</u>
            </a>
            {{ props.referTo }}"
        </h1>
        <h1 v-else class="text-xl font-bold mt-6 text-red-600">
            "{{ props.result }}
            <a href="tel:{{ props.tel }}"> 
                <u>{{ props.tel }}</u>
            </a>
            {{ props.referTo }}"
        </h1>
    </div>
</template>
