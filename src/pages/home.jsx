import { getSchedule } from "../service/google-sheet";
import React, {useEffect,useState } from "react";

export const Home = () => {
  const [mySchedule, setMySchedule]=useState([])
  useEffect(() => {
    getSchedule().then((response) => {
      setMySchedule(response.data)
    });
  }, []);
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
  }) => {
    return (
      <div className="w-full bg-gray-200 rounded flex px-6 py-4 gap-x-12 my-4">
        <img src={pharmacyImg} className="h-20 w-20"></img>
        <div className="flex-col text-primary-400">
          <p className="text-lg font-bold">{pharmacyName}</p>
          <p>
            {takeTime} {meal}
          </p>
          <p>จำนวน {tablet} เม็ด</p>
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
        Do not forget to take your medicine
      </div>
      <div className="text-lg text-primary-400 font-bold mt-3">Schedule</div>
      {mySchedule.map(() => {
        return (
          <PharmacyCard
            pharmacyName="ยาแก้ปวด"
            takeTime="ก่อนอาหาร"
            meal="กลางวัน"
            tablet="1"
            pharmacyImg={
              pharmacyImages[Math.floor(Math.random() * pharmacyImages.length)]
            }
          ></PharmacyCard>
        );
      })}
    </div>
  );
};
