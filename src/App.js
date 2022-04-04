import { Routes, Route } from "react-router-dom"
import { Add } from "./pages/add"
import {Home} from "./pages/home"
import { ScanQR } from "./pages/scan-qr"
import {useNavigate} from "react-router"
function App() {
    const navigate=useNavigate()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="scan-qr" element={ <ScanQR/> } />
        <Route path="add" element={ <Add/> } />
      </Routes>
      <div>
          <button onClick={()=>navigate("/")}>Home</button>
          <button onClick={()=>navigate("/scan-qr")}>Scan QR</button>
          <button onClick={()=>navigate("/add")}>Add</button>
      </div>
    </div>
  )
}

export default App