import "./App.css";
import React, { useState, useEffect } from "react";

const liff = window.liff;

function App() {
  const [imageProfile, setImageProfile] = useState("");
  useEffect(() => {
    initLiff();
  }, []);

  const initLiff = async () => {
    await liff.init({ liffId: "1656846738-laQ554Ad" });
    const proflie = await liff.getProfile();
    setImageProfile(proflie.pictureUrl);
  };

  return (
    <div className="container">
      <img id="pictureUrl" src={imageProfile} alt="imageProfile"/>
      <input type="text" id="fullname" />
      <button> ลงทะเบียน</button>
    </div>
  );
}

export default App;
