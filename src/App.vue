<script setup lang="ts">
import { ref } from "vue";
const stomach1 = ref();
const stomach2 = ref();
const waist = ref();
const vgn = ref();
const fts = ref();
const showError = ref(false);
const result = ref("");
const cnt = ref(-1);

const showResult = () => {
  result.value = "";
  cnt.value = 0;
  showError.value = hasCheckedEveryBox();

  if (showError.value) {
    return;
  }

  let input = [
    stomach1.value,
    stomach2.value,
    waist.value,
    vgn.value,
    fts.value,
  ];

  cnt.value = input.filter((item) => item == "true").length;

  if (cnt.value === 0) {
    result.value = "ไม่มีอาการ";
  } else if (cnt.value === 1) {
    result.value = "ดูอาการ";
  } else if (cnt.value >= 2 && cnt.value <= 3) {
    result.value = "ดูอาการ และติดต่อเจ้าหน้าที่";
  } else if (cnt.value >= 4 && cnt.value <= 5) {
    result.value = "มาโรงพยาบาลทันที";
  }
};

const reset = () => {
  stomach1.value = undefined;
  stomach2.value = undefined;
  waist.value = undefined;
  vgn.value = undefined;
  fts.value = undefined;
  showError.value = false;
  result.value = "";
  cnt.value = -1;
};

const hasCheckedEveryBox = () => {
  return (
    stomach1.value == undefined ||
    stomach2.value == undefined ||
    waist.value == undefined ||
    vgn.value == undefined ||
    fts.value == undefined
  );
};
</script>
<template>
  <div class="lg:mx-80 lg:my-6 lg:px-3 border">
    <div class="overflow-x-auto">
      <div class="text-center mt-6">
        <h1 class="text-2xl font-bold">แบบประเมิน คลอดก่อนกำหนด</h1>
      </div>
      <table class="table table-zebra w-full mt-6">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th class="text-xl">รายการ</th>
            <th class="text-xl">มี</th>
            <th class="text-xl">ไม่มี</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td class="font-bold">
              ปวดท้องหรือมีท้องแข็ง สม่ำเสมออย่างน้อย 4 ครั้งใน 20 นาที
            </td>
            <td>
              <input
                type="radio"
                name="stomach1"
                class="radio"
                value="true"
                v-model="stomach1"
              />
            </td>
            <td>
              <input
                type="radio"
                name="stomach1"
                class="radio"
                value="false"
                v-model="stomach1"
              />
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td class="font-bold">
              ปวดท้องน้อย ปวดหน่วงบริเวณหัวเหน่า คล้ายปวดประจำเดือน
            </td>
            <td>
              <input
                type="radio"
                name="stomach2"
                class="radio"
                value="true"
                v-model="stomach2"
              />
            </td>
            <td>
              <input
                type="radio"
                name="stomach2"
                class="radio"
                value="false"
                v-model="stomach2"
              />
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td class="font-bold">
              มีอาการปวดบริเวณบั้นเอว ปวดปริเวณหลังส่วนล่าง <br />
              นั่งฟักหรือนอนพักแล้วอาการเหล่านี้ไม่หายไป
            </td>
            <td>
              <input
                type="radio"
                name="waist"
                class="radio"
                value="true"
                v-model="waist"
              />
            </td>
            <td>
              <input
                type="radio"
                name="waist"
                class="radio"
                value="false"
                v-model="waist"
              />
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td class="font-bold">
              มีมูกออกทางช่องคลอด มีลักษณะหนียวหรือตกขาว เป็นเมือกใส <br />
              หรือมีน้ำไหลคล้ายปัสวะออกทางช่องคลอด
            </td>
            <td>
              <input
                type="radio"
                name="vgn"
                class="radio"
                value="true"
                v-model="vgn"
              />
            </td>
            <td>
              <input
                type="radio"
                name="vgn"
                class="radio"
                value="false"
                v-model="vgn"
              />
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td class="font-bold">
              ลูกดิ้นน้อยลงหรือไม่ดิ้น หรือมีเลือดออกจากช่องคลอด
            </td>
            <td>
              <input
                type="radio"
                name="fts"
                class="radio"
                value="true"
                v-model="fts"
              />
            </td>
            <td>
              <input
                type="radio"
                name="fts"
                class="radio"
                value="false"
                v-model="fts"
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td>
              <button class="btn btn-outline" @click="reset">ล้าง</button>
            </td>
            <td>
              <button class="btn" @click="showResult">ดูผล</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="cnt != -1 && !showError" class="text-center mt-6">
        <h1 class="text-2xl font-bold">ผลการประเมิน</h1>
        <div class="divider"></div>
        <h1 class="text-2xl font-bold mt-6">{{ result }}</h1>
      </div>

      <div v-if="showError" class="text-center mt-6">
        <h1 class="text-2xl font-bold text-red-600">โปรดเลือกให้ครบทุกช่อง</h1>
      </div>
    </div>
  </div>
</template>
