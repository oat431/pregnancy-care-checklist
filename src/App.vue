<script setup lang="ts">
import { ref } from 'vue';
const stomach1 = ref(false);
const stomach2 = ref(false);
const waist = ref(false);
const vgn = ref(false);
const fts = ref(false);
const result = ref("");
const cnt = ref(0);

const showResult = () => {
  if(stomach1.value){cnt.value += 1;}
  if(stomach2.value){cnt.value += 1;}
  if(waist.value){cnt.value += 1;}
  if(vgn.value){cnt.value += 1;}
  if(fts.value){cnt.value += 1;}

  if(cnt.value == 0){
    result.value = "ไม่มีอาการ";
  }

  if(cnt.value == 1){
    result.value = "มีอาการ";
  }

  if(cnt.value == 2){
    result.value = "มีอาการ 2 ครั้ง";
  }

  if(cnt.value == 3){
    result.value = "มีอาการ 3 ครั้ง";
  }

  if(cnt.value == 4){
    result.value = "มีอาการ 4 ครั้ง";
  }

  if(cnt.value == 5){
    result.value = "มีอาการ 5 ครั้ง";
  }

}

</script>
<template>
  <div class="lg:mx-80 lg:my-6 lg:px-3 border">
    <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
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
        <td class="font-bold">ปวดท้องหรือมีท้องแข็ง สม่ำเสมออย่างน้อย 4 ครั้งใน 20 นาที</td>
        <td>
            <input type="radio" name="stomach1" class="radio" v-model="stomach1"/>
        </td>
        <td>
            <input type="radio" name="stomach1" class="radio"/>
        </td>
      </tr>
      <tr>
        <th>2</th>
        <td class="font-bold">ปวดท้องน้อย ปวดหน่วงบริเวณหัวเหน่า คล้ายปวดประจำเดือน</td>
        <td>
            <input type="radio" name="stomach2" class="radio" v-model="stomach2"/>
        </td>
        <td>
            <input type="radio" name="stomach2" class="radio" />
        </td>
      </tr>
      <tr>
        <th>3</th>
        <td class="font-bold">มีอาการปวดบริเวณบั้นเอว ปวดปริเวณหลังส่วนล่าง <br/> นั่งฟักหรือนอนพักแล้วอาการเหล่านี้ไม่หายไป</td>
        <td>
            <input type="radio" name="waist" class="radio" v-model="waist"/>
        </td>
        <td>
            <input type="radio" name="waist" class="radio" />
        </td>
      </tr>
      <tr>
        <th>4</th>
        <td class="font-bold">มีมูกออกทางช่องคลอด มีลักษณะหนียวหรือตกขาว เป็นเมือกใส <br/> หรือมีน้ำไหลคล้ายปัสวะออกทางช่องคลอด</td>
        <td>
            <input type="radio" name="vgn" class="radio" v-model="vgn"/>
        </td>
        <td>
            <input type="radio" name="vgn" class="radio" />
        </td>
      </tr>
      <tr>
        <th>5</th>
        <td class="font-bold">ลูกดิ้นน้อยลงหรือไม่ดิ้น หรือมีเลือดออกจากช่องคลอด</td>
        <td>
            <input type="radio" name="fts" class="radio" v-model="fts"/>
        </td>
        <td>
            <input type="radio" name="fts" class="radio" />
        </td>
      </tr>
      <tr>
        <th></th>
        <td></td>
        <td>
          <button class="btn" @click="showResult">ดูผล</button>
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <div class="text-center">
    <h1 class="text-2xl font-bold">ผลการประเมิน</h1>
    <h1 class="text-2xl font-bold">{{result}}</h1>
  </div>
  </div>
  </div>
</template>
