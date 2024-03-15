
import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from "./pages/welcome";
import Homes from "./pages/home";
import HIWorks from "./pages/howitworks";
import './sass/main.scss'
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/Home" element={<Homes/>} ></Route>
      <Route path="/How" element={<HIWorks/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
