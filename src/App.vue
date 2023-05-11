<script setup lang="ts">
import { Form } from "vee-validate";
import TableRow from "./components/TableRow.vue";
import Result from "./components/Result.vue";
import * as yup from "yup";
import { ref } from "vue";
import topicData from "./data/topic.json";

const result = ref("");
const data = ref(topicData);
const schema = yup.object({
  stomach1: yup.string().required("กรุณาเลือกคำตอบ"),
  stomach2: yup.string().required("กรุณาเลือกคำตอบ"),
  waist: yup.string().required("กรุณาเลือกคำตอบ"),
  vgn: yup.string().required("กรุณาเลือกคำตอบ"),
  fts: yup.string().required("กรุณาเลือกคำตอบ"),
});

async function onSubmit(values: { [x: string]: string }) {
  let score = 0;
  for (let key in values) {
    if (values[key] === "true") {
      score += 1;
    }
  }
  if (score === 0) {
    result.value = "ไม่มีอาการ";
  } else if (score >= 1 && score <= 3) {
    result.value =
      "ดูอาการต่ออีกสองชัวโมง ถ้ายังมีอาการอยู่ติดต่อสอบถาม ได้ที่เบอร์โทร 055022000 ต่อ ห้องคลอด 3801 - 3802";
  } else if (score >= 4 && score <= 5) {
    result.value =
      "ติดต่อสอบถามที่ เบอร์โทร 055022000 ต่อ ห้องคลอด 3801 - 3802 และมาโรงพยาบาลทันที";
  }
}
function resetValue() {
  window.scrollTo(0, 0);
  result.value = "";
}
</script>
<template>
  <div class="lg:mx-60 lg:my-6 lg:px-3 sm:mx-10 sm:my-2 sm:px-1 border">
    <div class="overflow-x-auto">
      <div class="text-center mt-6">
        <h1 class="text-2xl font-bold">แบบประเมิน คลอดก่อนกำหนด</h1>
      </div>
      <Form :validation-schema="schema" @submit="onSubmit">
        <table class="table-zebra mt-6">
          <thead>
            <tr class="bg-base-200">
              <th></th>
              <th class="text-xl px-6 py-3">รายการ</th>
              <th class="text-xl px-6 py-3">มี</th>
              <th class="text-xl px-6 py-3">ไม่มี</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              v-for="item in data"
              :no="item.no"
              :title="item.title"
              :field="item.field"
            />
            <tr>
              <th class="px-3 py-2"></th>
              <td class="px-3 py-2"></td>
              <td class="px-3 py-2">
                <button
                  @click="resetValue"
                  type="reset"
                  class="btn btn-outline"
                >
                  ล้าง
                </button>
              </td>
              <td class="px-3 py-2">
                <button class="btn">ดูผล</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Result v-if="result.length != 0" class="my-6" :result="result" />
      </Form>
    </div>
  </div>
</template>
