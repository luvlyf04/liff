export const Home = () => {
  return (
    <div className="px-8 pt-16 pb-24">
      <div className="text-xl text-primary-400">เพิ่มตารางทานยา</div>
      <div className="text-gray-400">กรุณากรอกข้อมูลให้ครบถ้วน</div>
      <div className="text-primary-400 mt-4">ชื่อ</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกชื่อ"
      />
      <div className="text-primary-400 mt-4">ชื่อยา</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกชื่อยา"
      />
      <div className="text-primary-400 mt-4">รับประทานครั้งละ (เม็ด)</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกจำนวนยา"
      />
      <div className="text-primary-400 mt-4">จำนวนยาทั้งหมด</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกจำนวนยา"
      />
      <div className="text-primary-400 mt-4">เวลาที่รับประทาน</div>
      <div className="flex items-center gap-x-3">
        <input type="radio" />
        <p>ก่อนอาหาร</p>
      </div>
      <div className="flex items-center gap-x-3">
        <input type="radio" />
        <p>หลังอาหาร</p>
      </div>

      <div className="text-primary-400 mt-4">ช่วงเวลา</div>
      <div className="flex items-center gap-x-3">
        <input type="checkbox" />
        <p>เช้า</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" />
        <p>กลางวัน</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" />
        <p>เย็น</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" />
        <p>ก่อนนอน</p>
      </div>

      <button className="bg-primary-400 w-full py-2 rounded text-white font-bold mt-4">
        เพิ่มตารางทานยา
      </button>
    </div>
  );
};
