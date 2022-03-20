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
      <input type="text" id="fullname" placeholder="ชื่อ-นามสกุล" />
      <input type="text" id="phamacyName" placeholder="ชื่อยา" />
      <input type="number" id="amount" placeholder="จำนวนยา(เม็ด)" />
      <div className="checkbox">
        <input type="radio" id="before" name="takeTime" value="ก่อนอาหาร" />
        <label for="before">ก่อนอาหาร</label>
      </div>

      <div className="checkbox">
        <input type="radio" id="after" name="takeTime" value="หลังอาหาร" />
        <label for="after">หลังอาหาร</label>
      </div>

      <button
        onClick={() => {
          const fullName = document.getElementById("fullname").value;
          const phamacyName = document.getElementById("phamacyName").value;
          const amount = document.getElementById("amount").value;
          // console.log(document.getElementsByName("takeTime"))
          // const takeTime= document.getElementsByName("takeTime").find(choice=>choice.checked).value
          console.log("onclick");
          test1(fullName, userId);
          insert({
            time: new Date(),
            fullName: fullName,
            phamacyName: phamacyName,
            amount: amount,
            takeTime: "ก่อนอาหาร",
            userId: userId,
          });
        }}
      >
        {" "}
        ลงทะเบียน
      </button>
    </div>
  );
}

export default App;
