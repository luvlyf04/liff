import { useNavigate } from "react-router"
import React, { useState, useEffect } from "react";
import { insert } from "../service/google-sheet";
export const Add = ({ detail }) => {
  const navigate = useNavigate()
  const [fullName,setFullName]=useState(detail.fullName)
  const [pharmacyName,setPharmacyName]=useState(detail.pharmacyName)
  const [tablet,setTablet]=useState(detail.tablet)
  const [quantity,setQuantity]=useState(detail.quantity)
  const [takeTime,setTakeTime]=useState(detail.takeTime)
  const [meal,setMeal]=useState(detail.meal? detail.meal.split(",").map(item=>item.trim()):[])
  const addSchedule =async () => {
    await insert({
      time: new Date(),
      fullName:fullName,
      pharmacyName:pharmacyName,
      quantity:quantity,
      takeTime:takeTime,
      meal:meal.join(","),
      tablet:tablet,
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
        value={fullName}
        onChange={(e)=>{
          const {value}=e.target 
          setFullName(value)
        }}
      />
      <div className="text-primary-400 mt-4">ชื่อยา</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกชื่อยา"
        value={pharmacyName}
        onChange={(e)=>{
          const {value}=e.target
          setPharmacyName(value)
        }}

      />
      <div className="text-primary-400 mt-4">รับประทานครั้งละ (เม็ด)</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกจำนวนยา"
        value={tablet}
        onChange={(e)=>{
          const {value}=e.target
          setTablet(value)
        }}
      />
      <div className="text-primary-400 mt-4">จำนวนยาทั้งหมด</div>
      <input
        type="text"
        className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
        placeholder="กรุณากรอกจำนวนยา"
        value={quantity}
        onChange={(e)=>{
          const {value}=e.target
          setQuantity(value)
        }}

      />
      <div className="text-primary-400 mt-4">เวลาที่รับประทาน</div>
      <div className="flex items-center gap-x-3">
        <input type="radio" value="ก่อนอาหาร" checked={takeTime == "ก่อนอาหาร"} onChange={()=>{setTakeTime("ก่อนอาหาร")}}/>
        <p>ก่อนอาหาร</p>
      </div>
      <div className="flex items-center gap-x-3">
        <input type="radio" value="หลังอาหาร" checked={takeTime == "หลังอาหาร"} onChange={()=>{setTakeTime("หลังอาหาร")}} />
        <p>หลังอาหาร</p>
      </div>

      <div className="text-primary-400 mt-4">ช่วงเวลา</div>
      <div className="flex items-center gap-x-3">
        <input type="checkbox" value={"เช้า"} checked={meal.includes("เช้า")} 
        onChange={()=>{
          if(meal.includes("เช้า")){
            const mealIndex=meal.findIndex(item=>item=="เช้า")
            meal.splice(mealIndex, 1)
            setMeal([...meal])
          }
          else setMeal([...meal,"เช้า"])
        }}
        />
        <p>เช้า</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" value={"กลางวัน"} checked={meal.includes("กลางวัน")} 
        onChange={()=>{
          if(meal.includes("กลางวัน")){
            const mealIndex=meal.findIndex(item=>item=="กลางวัน")
            meal.splice(mealIndex, 1)
            setMeal([...meal])
          }
          else setMeal([...meal,"กลางวัน"])
        }}
        />
        <p>กลางวัน</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" value={"เย็น"} checked={meal.includes("เย็น")} 
        onChange={()=>{
          if(meal.includes("เย็น")){
            const mealIndex=meal.findIndex(item=>item=="เย็น")
            meal.splice(mealIndex, 1)
            setMeal([...meal])
          }
          else setMeal([...meal,"เย็น"])
        }}
        />
        <p>เย็น</p>
      </div>

      <div className="flex items-center gap-x-3">
        <input type="checkbox" value={"ก่อนนอน"} checked={meal.includes("ก่อนนอน")}
        onChange={()=>{
          if(meal.includes("ก่อนนอน")){
            const mealIndex=meal.findIndex(item=>item=="ก่อนนอน")
            meal.splice(mealIndex, 1)
            setMeal([...meal])
          }
          else setMeal([...meal,"ก่อนนอน"])
        }}
        />
        <p>ก่อนนอน</p>
      </div>

      <button onClick={() => { addSchedule() }} className="bg-primary-400 w-full py-2 rounded text-white font-bold mt-4">
        เพิ่มตารางทานยา
      </button>
    </div>
  );
};
