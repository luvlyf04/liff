import { getSchedule } from "../service/google-sheet";
import React, { useEffect, useState } from "react";

const liff = window.liff; //ต้องการ userId จาก liff 
export const Home = () => {
  const [mySchedule, setMySchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchSchedule();
  }, []);
  const fetchSchedule = async() => {
    liff.init({ liffId: "1656846738-laQ554Ad" }, async () => {
      const profile = await liff.getProfile();
      getSchedule(profile.userId).then((response) => {
        console.log(response.data);
        setMySchedule(response.data);
      });
    });
  };
  const pharmacyImages = [
    "/assets/images/med1.png",
    "/assets/images/med2.png",
    "/assets/images/med3.png",
    "/assets/images/med4.png",
  ];
  const PharmacyCard = ({
    pharmacyName,
    takeTime,
    meal,
    tablet,
    pharmacyImg,
    time,
  }) => {
    const currentDate = new Date();
    const timeDifferent = currentDate.getTime() - new Date(time).getTime();
    //ติดลบคือยังมาไม่ถึง->อยู่ที่ว่าเอาใครลบใครด้วย ในส่วนนี้เอา ปจบ-สักอย่าง
    const dayDifferent = Math.floor(timeDifferent / (1000 * 60 * 60 * 24));
    const getDateString = () => {
      if (dayDifferent == 0) {
        return "วันนี้";
      } else if (dayDifferent == -1) {
        return "พรุ่งนี้";
      } else {
        return new Intl.DateTimeFormat("th", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date(time));
      }
    };
    console.log(dayDifferent);
    return (
      <div className="w-full bg-gray-200 rounded flex px-6 py-4 gap-x-12 my-4">
        <img src={pharmacyImg} className="h-20 w-20"></img>
        <div className="flex-col text-primary-400">
          <p className="text-lg font-bold">{pharmacyName}</p>
          <p>
            {takeTime} {meal}
          </p>
          <p>จำนวน {tablet} เม็ด</p>
          <p>{getDateString()}</p>
        </div>
      </div>
    );
  };
  const EmptySchedule = () => {
    return (
      <div className="bg-gray-100 w-full flex items-center gap-x-12 animate-pulse p-4">
        <div className="bg-gray-200 h-20 w-20"></div>
        <div className="flex flex-col gap-y-4 ">
          <div className="bg-gray-300 w-16 h-4"></div>
          <div className="bg-gray-200 w-32 h-8"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="px-8 pt-14 pb-24">
      <div className="text-xl text-primary-400 font-bold">
        Notify For Medicine
      </div>
      <div className="text-gray-400 mt-2 text-lg">
        กรุณาอย่าลืมทานยา
        {/* เปลี่ยนหัวข้อ 63 66 */}
      </div>
      <div className="bg-primary-200 w-full h-1 mt-2"></div>
      <div className="text-lg text-primary-400 font-bold mt-3">ตารางทานยา</div>
      {loading ? (
        <div className="flex flex-col gap-y-4">
          <EmptySchedule></EmptySchedule>
          <EmptySchedule></EmptySchedule>
          <EmptySchedule></EmptySchedule>
        </div>
      ) : (
        mySchedule
          .sort((a, b) => new Date(a.time) - new Date(b.time))
          .map((schedule) => {
            return (
              <PharmacyCard
                time={schedule.time}
                pharmacyName={schedule.pharmacyName}
                takeTime={schedule.takeTime}
                meal={schedule.meal}
                tablet={schedule.tablet}
                pharmacyImg={
                  pharmacyImages[
                    Math.floor(Math.random() * pharmacyImages.length)
                  ]
                }
              ></PharmacyCard>
            );
          })
      )}
    </div>
  );
};
