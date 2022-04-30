import { useNavigate } from "react-router"
import { insert } from "../service/google-sheet";
export const Add = ({ detail }) => {
  const navigate = useNavigate()
  console.log(detail)
  const addSchedule =async () => {
    await insert({
      time: new Date(),
      fullName: detail.fullName,
      pharmacyName: detail.pharmacyName,
      quantity: detail.quantity,
      takeTime: detail.takeTime,
      meal: detail.meal,
      tablet: detail.tablet,
      userId: detail.userId,
    });
    navigate("/")
  }
  return (
    <div className="px-8 pt-16 pb-24">
      <div className="text-xl text-primary-400">เพิ่มตารางทานยา</div>
      <div className="text-gray-400">กรุณากรอกข้อมูลให้ครบถ้วน</div>
      <div className="text-primary-400 mt-4">ชื่อ</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกชื่อ"
        value={detail.fullName}
      />
      <div className="text-primary-400 mt-4">ชื่อยา</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกชื่อยา"
        value={detail.pharmacyName}
      />
      <div className="text-primary-400 mt-4">รับประทานครั้งละ (เม็ด)</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกจำนวนยา"
        value={detail.tablet}
      />
      <div className="text-primary-400 mt-4">จำนวนยาทั้งหมด</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกจำนวนยา"
        value={detail.quantity}
      />
      <div className="text-primary-400 mt-4">เวลาที่รับประทาน</div>
      <div className="flex items-center gap-x-3">
        <input type="radio" value="ก่อนอาหาร" checked={detail.takeTime == "ก่อนอาหาร"} />
        <p>ก่อนอาหาร</p>
      </div>
      <div className="flex items-center gap-x-3">
        <input type="radio" value="หลังอาหาร" checked={detail.takeTime == "หลังอาหาร"} />
        <p>หลังอาหาร</p>
      </div>

      <div className="text-primary-400 mt-4">ช่วงเวลา</div>
      <div className="flex items-center gap-x-3">
        <input type="checkbox" value={"เช้า"} checked={detail.meal.includes("เช้า")} />
        <p>เช้า</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" value={"กลางวัน"} checked={detail.meal.includes("กลางวัน")} />
        <p>กลางวัน</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" value={"เย็น"} checked={detail.meal.includes("เย็น")} />
        <p>เย็น</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" value={"ก่อนนอน"} checked={detail.meal.includes("ก่อนนอน")} />
        <p>ก่อนนอน</p>
      </div>

      <button onClick={() => { addSchedule() }} className="bg-primary-400 w-full py-2 rounded text-white font-bold mt-4">
        เพิ่มตารางทานยา
      </button>
    </div>
  );
};
