
import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from "./pages/welcome";
import Homes from "./pages/home";
import './sass/main.scss'

import Learn from "./components/learn";
import TheBox from "./components/box";
import Testmonial from "./components/testimonial";
import DashboardPage from "./pages/dashboards";
import ContactPage from "./components/contact-page";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/Home" element={<Homes/>} ></Route>

      <Route path="/toturial" element={<Learn/>} ></Route>
      <Route path="/tools" element={<TheBox/>} ></Route>
      <Route path="/testimonial" element={<Testmonial/>} ></Route>

      <Route path="/dashboard" element={<DashboardPage/>}></Route>
      <Route path="/ContactPage" element={<ContactPage/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
