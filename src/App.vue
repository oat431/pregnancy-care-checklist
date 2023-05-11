<script setup lang="ts">
import { Form } from "vee-validate";
import TableRow from "./components/TableRow.vue";
import TableSubmit from "./components/TableSubmit.vue";
import Result from "./components/Result.vue";
import * as yup from "yup";
import { ref } from "vue";

const result = ref("");
const schema = yup.object({
  stomach1: yup.string().required("กรุณาเลือกคำตอบ"),
  stomach2: yup.string().required("กรุณาเลือกคำตอบ"),
  waist: yup.string().required("กรุณาเลือกคำตอบ"),
  vgn: yup.string().required("กรุณาเลือกคำตอบ"),
  fts: yup.string().required("กรุณาเลือกคำตอบ"),
});

function onSubmit(values: object) {
  let score = 0;
  for(let key in values) {
    if (values[key] === "true") {
      score += 1;
    }
  }
  if (score === 0) {
    result.value = "ไม่มีอาการ";
  } else if (score >= 1 && score <= 3) {
    result.value = "ดูอาการต่ออีกสองชัวโมง ถ้ายังมีอาการอยู่ติดต่อสอบถาม ได้ที่เบอร์โทร 055022000 ต่อ ห้องคลอด 3801 - 3802";
  } else if (score >= 4 && score <= 5) {
    result.value = "ติดต่อสอบถามที่ เบอร์โทร 055022000 ต่อ ห้องคลอด 3801 - 3802 และมาโรงพยาบาลทันที";
  }
}
</script>
<template>
  <div class="lg:mx-60 lg:my-6 lg:px-3 sm:mx-10 sm:my-2 sm:px-1 border">
    <div class="overflow-x-auto">
      <div class="text-center mt-6">
        <h1 class="text-2xl font-bold">แบบประเมิน คลอดก่อนกำหนด</h1>
      </div>
      <Form :validation-schema="schema" @submit="onSubmit">
        <table class="table table-zebra mt-6">
          <thead>
            <tr>
              <th></th>
              <th class="text-xl">รายการ</th>
              <th class="text-xl">มี</th>
              <th class="text-xl">ไม่มี</th>
            </tr>
          </thead>
          <tbody>
            <TableRow 
              no="1"
              title="ปวดท้องหรือมีท้องแข็ง สม่ำเสมออย่างน้อย 4 ครั้งใน 20 นาที"
              field="stomach1"
            />
            <TableRow 
              no="2"
              title="ปวดท้องน้อย ปวดหน่วงบริเวณหัวเหน่า คล้ายปวดประจำเดือน"
              field="stomach2"
            />
            <TableRow 
              no="3"
              title="มีอาการปวดบริเวณบั้นเอว ปวดปริเวณหลังส่วนล่าง นั่งฟักหรือนอนพักแล้วอาการเหล่านี้ไม่หายไป"
              field="waist"
            />
            <TableRow 
              no="4"
              title="มีมูกออกทางช่องคลอด มีลักษณะหนียวหรือตกขาว เป็นเมือกใสหรือมีน้ำไหลคล้ายปัสวะออกทางช่องคลอด"
              field="vgn"
            />
            <TableRow 
              no="5"
              title="ลูกดิ้นน้อยลงหรือไม่ดิ้น หรือมีเลือดออกจากช่องคลอด"
              field="fts"
            />
            <TableSubmit />
          </tbody>
        </table>
        <ValidationResult />
        <Result v-if="result.length != 0 " class="my-6" :result="result" />
      </Form>
    </div>
  </div>
</template>
