<script setup lang="ts">
import { defineProps } from "vue";
import { Field, ErrorMessage } from "vee-validate";
const props = defineProps({
    no: String,
    title: String,
    field: String,
});
</script>
<template>
    <tr>
        <th>{{ props.no }}</th>
        <td class="font-bold">
            <p>{{ props.title }}</p>
            <p>
                <ErrorMessage class="text-error text-sm" :name="props.field" />
            </p>
        </td>
        <td>
            <Field type="radio" :name="props.field" class="radio" value="true" />
        </td>
        <td>
            <Field type="radio" :name="props.field" class="radio" value="false" />
        </td>
    </tr>
</template>
