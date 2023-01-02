import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../Contact";
import Help from "../Help";
import Home from "../Home";
import MoreInfo from "../MoreInfo";
import MyOrder from "../MyOrder";
import SignUp from "../SignUp";
import Whislist from "../Whislist";



function Routers() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/SignUp' element={<SignUp/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/Whislist' element={<Whislist/>}></Route>
                <Route path='/Help' element={<Help/>}></Route>
                <Route path='/MyOrder' element={<MyOrder/>}></Route>
                <Route path='/MoreInfo' element={<MoreInfo/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers