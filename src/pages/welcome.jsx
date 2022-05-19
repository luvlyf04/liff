import { useNavigate } from "react-router"

export const WelcomePage =()=>{
    const navigate = useNavigate()
    return <div>
        <h3>Notify for Medicine</h3>
        <h1>ระบบแจ้งเตือนช่วยทานยาด้วย LINE</h1>
        <img src="/assets/images/picOnWelcome.png"></img>
        <p>ระบบที่จะไม่ทำให้คุณลืมทานยาด้วยปลายนิ้ว</p>
        <button onClick={()=>navigate("/home")}>กดเพื่อเข้าร่วมเลย!</button>
    </div>

    
}