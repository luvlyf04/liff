import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import { insert } from "../service/google-sheet";
import ConfirmDialog from "../components/confirm-dialog";
import SuccessDialog from "../components/success-dialog ";
export const Add = ({ detail }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(detail.fullName);
  const [pharmacyName, setPharmacyName] = useState(detail.pharmacyName);
  const [tablet, setTablet] = useState(detail.tablet);
  const [quantity, setQuantity] = useState(detail.quantity);
  const [takeTime, setTakeTime] = useState(detail.takeTime);
  const [meal, setMeal] = useState(
    detail.meal ? detail.meal.split(",").map((item) => item.trim()) : []
  );
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const getTakeTime = (takeTime, meal) => {
    const min = takeTime == "ก่อนอาหาร" ? -15 : 30;
    let hour;
    if (meal == "เช้า") {
      hour = 7;
    } else if (meal == "กลางวัน") {
      hour = 12;
    } else if (meal == "เย็น") {
      hour = 18;
    } else {
      hour = 21;
    }
    return [hour, min];
  };
  async function addSchedule() {
    const currentDate = new Date();
    let totalAmount = quantity;
    let futureDate = 1;
    while (totalAmount > 0) {
      for (const mealToEat of meal) {
        if (totalAmount > 0) {
          let [hour, min] = getTakeTime(takeTime, mealToEat);
          let dateTime = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + futureDate,
            hour,
            min
          );
          await insert({
            time: dateTime,
            fullName: fullName,
            pharmacyName: pharmacyName,
            takeTime: takeTime,
            meal: mealToEat,
            tablet: tablet,
            userId: detail.userId,
          });

          totalAmount -= tablet;
        }
      }
      futureDate += 1;
    }
    setShowSuccessDialog(true);
  }

  return (
    <>
      {showConfirmDialog && (
        <ConfirmDialog
          onCancel={() => setShowConfirmDialog(false)}
          onConfirm={() => {
            setShowConfirmDialog(false);
            addSchedule();
          }}
        ></ConfirmDialog>
      )}
      {showSuccessDialog && (
        <SuccessDialog
          onConfirm={() => {
            setShowSuccessDialog(false);
            navigate("/home");
          }}
        ></SuccessDialog>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowConfirmDialog(true);
        }}
      >
        <div className="px-8 pt-16 pb-24">
          <div className="text-xl text-primary-400">เพิ่มตารางทานยา</div>
          <div className="text-gray-400">กรุณากรอกข้อมูลให้ครบถ้วน</div>
          <div className="text-primary-400 mt-4">ชื่อ</div>
          <input
            required={meal.length}
            type="text"
            className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
            placeholder="กรุณากรอกชื่อ"
            value={fullName}
            onChange={(e) => {
              const { value } = e.target;
              setFullName(value);
            }}
          />
          <div className="text-primary-400 mt-4">ชื่อยา</div>
          <input
            required
            type="text"
            className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
            placeholder="กรุณากรอกชื่อยา"
            value={pharmacyName}
            onChange={(e) => {
              const { value } = e.target;
              setPharmacyName(value);
            }}
          />
          <div className="text-primary-400 mt-4">รับประทานครั้งละ (เม็ด)</div>
          <input
            min={1}
            required
            type="number"
            className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
            placeholder="กรุณากรอกจำนวนยา"
            value={tablet}
            onChange={(e) => {
              const { value } = e.target;
              setTablet(value);
            }}
          />
          <div className="text-primary-400 mt-4">จำนวนยาทั้งหมด</div>
          <input
            min={1}
            required
            type="number"
            className="border border-gray-400 rounded w-full h-10 px-3 mt-2"
            placeholder="กรุณากรอกจำนวนยา"
            value={quantity}
            onChange={(e) => {
              const { value } = e.target;
              setQuantity(value);
            }}
          />
          <div className="text-primary-400 mt-4">เวลาที่รับประทาน</div>
          <div className="flex items-center gap-x-3">
            <input
              name="takeTime"
              required
              type="radio"
              value={takeTime}
              checked={takeTime == "ก่อนอาหาร"}
              onChange={() => {
                setTakeTime("ก่อนอาหาร");
              }}
            />
            <p>ก่อนอาหาร</p>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              name="takeTime"
              required
              type="radio"
              value={takeTime}
              checked={takeTime == "หลังอาหาร"}
              onChange={() => {
                setTakeTime("หลังอาหาร");
              }}
            />
            <p>หลังอาหาร</p>
          </div>

          <div className="text-primary-400 mt-4">ช่วงเวลา</div>
          <div className="flex items-center gap-x-3">
            <input
              name="meal"
              required={!meal.length}
              type="checkbox"
              value={meal}
              checked={meal.includes("เช้า")}
              onChange={() => {
                if (meal.includes("เช้า")) {
                  const mealIndex = meal.findIndex((item) => item == "เช้า");
                  meal.splice(mealIndex, 1);
                  setMeal([...meal]);
                } else setMeal([...meal, "เช้า"]);
              }}
            />
            <p>เช้า</p>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              name="meal"
              required={!meal.length}
              type="checkbox"
              value={meal}
              checked={meal.includes("กลางวัน")}
              onChange={() => {
                if (meal.includes("กลางวัน")) {
                  const mealIndex = meal.findIndex((item) => item == "กลางวัน");
                  meal.splice(mealIndex, 1);
                  setMeal([...meal]);
                } else setMeal([...meal, "กลางวัน"]);
              }}
            />
            <p>กลางวัน</p>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              name="meal"
              required={!meal.length}
              type="checkbox"
              value={meal}
              checked={meal.includes("เย็น")}
              onChange={() => {
                if (meal.includes("เย็น")) {
                  const mealIndex = meal.findIndex((item) => item == "เย็น");
                  meal.splice(mealIndex, 1);
                  setMeal([...meal]);
                } else setMeal([...meal, "เย็น"]);
              }}
            />
            <p>เย็น</p>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              required={!meal.length}
              name="meal"
              type="checkbox"
              value={meal}
              checked={meal.includes("ก่อนนอน")}
              onChange={() => {
                if (meal.includes("ก่อนนอน")) {
                  const mealIndex = meal.findIndex((item) => item == "ก่อนนอน");
                  meal.splice(mealIndex, 1);
                  setMeal([...meal]);
                } else setMeal([...meal, "ก่อนนอน"]);
              }}
            />
            <p>ก่อนนอน</p>
          </div>

          <button className="bg-primary-400 w-full py-2 rounded text-white font-bold mt-4">
            เพิ่มตารางทานยา
          </button>
        </div>
      </form>
    </>
  );
};
