export const Home = () => {
  const PharmacyCard=({pharmacyName,takeTime, meal, tablet, pharmacyImg}) => {
    return <div className="w-full bg-gray-200 rounded flex px-6 py-4 gap-x-12 my-4">
    <img src={pharmacyImg} className="h-20 w-20"></img>
    <div className="flex-col text-primary-400">
      <p className="text-lg font-bold">{pharmacyName}</p>
      <p>{takeTime} {meal}</p>
      <p>จำนวน {tablet} เม็ด</p>
    </div>
  </div>
  }
  return (
    <div className="px-8 pt-14 pb-24">
      <div className="text-xl text-primary-400 font-bold">
        Notify For Medicine
      </div>
      <div className="text-gray-400 mt-2 text-lg">
        Do not forget to take your medicine
      </div>
      <div className="text-lg text-primary-400 font-bold mt-3">Schedule</div>
      <PharmacyCard pharmacyName="ยาแก้ปวด" takeTime="ก่อนอาหาร" meal="กลางวัน" tablet="1" pharmacyImg={"/assets/images/med.png"}></PharmacyCard>
      <PharmacyCard></PharmacyCard>
      <PharmacyCard></PharmacyCard>
      <PharmacyCard></PharmacyCard>
    </div>
  );
};
