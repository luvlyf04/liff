import "./App.css";
import React, { useState, useEffect } from "react";
import { test1 } from "./service/firebase";
import { insert } from "./service/google-sheet";

const liff = window.liff;

function App() {
  const [imageProfile, setImageProfile] = useState("");
  const [userId, setUserId] = useState("");
  useEffect(() => {
    initLiff();
  }, []);

  const initLiff = async () => {
    await liff.init({ liffId: "1656846738-laQ554Ad" });
    const profile = await liff.getProfile();
    setImageProfile(profile.pictureUrl);
    setUserId(profile.userId);
  };

  return (
    <div className="container">
      <img id="pictureUrl" src={imageProfile} alt="imageProfile" />
      <input type="text" id="fullname" />
      <button
        onClick={() => {
          const fullName = document.getElementById("fullname").value
          console.log("onclick");
          test1(fullName, userId);
          insert({
            time: new Date(),
            fullName: fullName,
            phamacyName: "พาราเซตามอล",
            amount: 2,
            takeTime: new Date(),
            userId: userId,
          })
        }}
      >
        {" "}
        ลงทะเบียน
      </button>
    </div>
  );
}

export default App;
