
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import View from "./pages/View";
// import Singleuser from './pages/Singleuser';


function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<View />} />
        {/* <Route path="/singleuser" element={<Viewsingleuser/>}></Route> */}
        {/* <Route path='/singleuser' element={<Singleuser/>}></Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
