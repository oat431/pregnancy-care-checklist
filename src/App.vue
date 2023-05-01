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
            <input type="radio" name="stomach1" class="radio" />
        </td>
        <td>
            <input type="radio" name="stomach1" class="radio" />
        </td>
      </tr>
      <tr>
        <th>2</th>
        <td class="font-bold">ปวดท้องน้อย ปวดหน่วงบริเวณหัวเหน่า คล้ายปวดประจำเดือน</td>
        <td>
            <input type="radio" name="stomach2" class="radio" />
        </td>
        <td>
            <input type="radio" name="stomach2" class="radio" />
        </td>
      </tr>
      <tr>
        <th>3</th>
        <td class="font-bold">มีอาการปวดบริเวณบั้นเอว ปวดปริเวณหลังส่วนล่าง <br/> นั่งฟักหรือนอนพักแล้วอาการเหล่านี้ไม่หายไป</td>
        <td>
            <input type="radio" name="waist" class="radio" />
        </td>
        <td>
            <input type="radio" name="waist" class="radio" />
        </td>
      </tr>
      <tr>
        <th>4</th>
        <td class="font-bold">มีมูกออกทางช่องคลอด มีลักษณะหนียวหรือตกขาว เป็นเมือกใส <br/> หรือมีน้ำไหลคล้ายปัสวะออกทางช่องคลอด</td>
        <td>
            <input type="radio" name="vgn" class="radio" />
        </td>
        <td>
            <input type="radio" name="vgn" class="radio" />
        </td>
      </tr>
      <tr>
        <th>5</th>
        <td class="font-bold">ลูกดิ้นน้อยลงหรือไม่ดิ้น หรือมีเลือดออกจากช่องคลอด</td>
        <td>
            <input type="radio" name="fts" class="radio" />
        </td>
        <td>
            <input type="radio" name="fts" class="radio" />
        </td>
      </tr>
      <tr>
        <th></th>
        <td></td>
        <td>
          <button class="btn">ดูผล</button>
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
</template>
