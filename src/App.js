import { Routes, Route } from "react-router-dom";
import { Add } from "./pages/add";
import { Home } from "./pages/home";
import { ScanQR } from "./pages/scan-qr";
import { useLocation, useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import { WelcomePage } from "./pages/welcome";

const liff = window.liff;
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isWelcomePage, setIsWelcomePage] = useState(true);
  const [detail, setDetail] = useState({
    fullName: "",
    pharmacyName: "",
    quantity: "",
    takeTime: "",
    meal: "",
    tablet: "",
    userId: "",
  });
  useEffect(() => {
    initLiff();
  }, []);
  useEffect(() => {
    if (location.pathname == "/") {
      setIsWelcomePage(true);
    } else {
      setIsWelcomePage(false);
    }
  }, [location.pathname]);
  const initLiff = async () => {
    liff.init(
      { liffId: "1656846738-laQ554Ad" },
      async () => {
        if (liff.isLoggedIn()) {
          const profile = await liff.getProfile();
          console.log(profile);
          setDetail({
            ...detail,
            userId: profile.userId,
          });
        } else {
          await liff.login();
          const profile = await liff.getProfile();
          console.log(profile);
          setDetail({
            ...detail,
            userId: profile.userId,
          });
        }
      },
      (err) => console.error(err.code, err.message)
    );
  };
  const scanQR = async () => {
    try {
      const result = await liff.scanCodeV2();
      const data = JSON.parse(result.value);
      setDetail({
        fullName: data.fullName,
        pharmacyName: data.pharmacyName,
        quantity: data.quantity,
        takeTime: data.takeTime,
        meal: data.meal,
        tablet: data.tablet,
        userId: detail.userId,
      });
      navigate("/add");

    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="home" element={<Home />} />
        <Route path="scan-qr" element={<ScanQR />} />
        <Route path="add" element={<Add detail={detail} />} />
      </Routes>
      {!isWelcomePage && (
        <div className="flex justify-around bg-primary-200 fixed bottom-0 w-full py-6">
          <button onClick={() => navigate("/home")} className="flex flex-col items-center">
            <img src="assets/images/home.svg" className="w-7"></img>
            {/* ปรับขนาดรูปไอคอน เปลี่ยนตรง w ของ class img */}
            <p>Home</p>
          </button>
          <button
            onClick={() => {
              scanQR();
            }}
            className="flex flex-col items-center"
          >
            <img src="assets/images/maximize.svg" className="w-7"></img>
            <p>Scan Qr</p>
          </button>
          <button onClick={() => navigate("/add")} className="flex flex-col items-center">
            <img src="assets/images/file-plus.svg " className="w-7"></img>
            <p>Add</p>
          </button>
        </div>
      )}
    </div>
  );
}

// ถ้าจะไม่ใส่คำอธิบายไอคอน ลบแท็ก p ออก

export default App;
