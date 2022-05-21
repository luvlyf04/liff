import { useNavigate } from "react-router";

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-8 py-16 flex flex-col justify-between h-screen" >
      <div>
        <h3 className="text-primary-400 font-bold text-xl">
          Notify for Medicine
        </h3>
        <div className="w-full h-1 bg-primary-200 my-2"></div>
        <h1 className="text-primary-400 font-bold text-2xl whitespace-pre-line">
          {"ระบบแจ้งเตือนช่วยทานยา\nด้วย LINE"}
        </h1>
        <div className="flex flex-col items-center ">
          <img src="/assets/images/picOnWelcome.png" className="p-6"></img>
          <p className="text-lg">ระบบที่จะไม่ทำให้คุณลืมทานยาด้วยปลายนิ้ว!</p>
        </div>
      </div>
      <button
        onClick={() => navigate("/home")}
        className="bg-primary-400 w-full py-3 mt-6 rounded-lg text-white text-xl shadow-md"
      >
        กดเพื่อเข้าร่วมเลย
      </button>
    </div>
  );
};
