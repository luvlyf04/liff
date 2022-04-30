import { Routes, Route } from "react-router-dom"
import { Add } from "./pages/add"
import { Home } from "./pages/home"
import { ScanQR } from "./pages/scan-qr"
import { useNavigate } from "react-router"
import React, { useState, useEffect } from "react";

const liff = window.liff;
function App() {
  const navigate = useNavigate()
  const [detail,setDetail] = useState({
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
  const initLiff = async () => {
    liff.init(
      { liffId: "1656846738-laQ554Ad" },
      async () => {
        if (liff.isLoggedIn()) {
          const profile = await liff.getProfile();
          setDetail({
            userId:profile.userId
          })
        } else {
          liff.login();
        }
      },
      (err) => console.error(err.code, err.message)
    );

  };
  const scanQR =async() => {
    try {
      const result = await liff.scanCodeV2();
      console.log(result.value)
      const detail = JSON.parse(result.value)
      console.log(detail)
      setDetail({
        fullName: detail.fullName,
      pharmacyName:  detail.pharmacyName,
      quantity: detail.quantity,
      takeTime: detail.takeTime,
      meal: detail.meal,
      tablet: detail.tablet,
      })
      navigate("/add")


    
      // insert({
      //   time: new Date(),
      //   fullName: detail.fullName,
      //   pharmacyName: detail.pharmacyName,
      //   quantity: detail.quantity,
      //   takeTime: detail.takeTime,
      //   meal: detail.meal,
      //   tablet: detail.tablet,
      //   userId: userId,
      // })

    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="scan-qr" element={<ScanQR />} />
        <Route path="add" element={<Add detail={detail} />} />
      </Routes>
      <div className="flex justify-around bg-blue-300 fixed bottom-0 w-full py-6">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => {
          scanQR()
        }}>Scan QR</button>
        <button onClick={() => navigate("/add")}>Add</button>
      </div>
    </div>
  )
}

export default App