import "./App.css";
import One from "./components/One.js";
import Show from "./components/Show.js";
import PlaceBid from "./components/PlaceBId.js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Buy from "./components/Buy.js";
import BuyInfo from "./components/BuyInfo.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
// import Home from "./components/Home.js";
// import CategoryCard from "./components/CategoryCard.js";
import MyComponent from "./components/MyComponent.js";
import FrontPage from "./components/Frontpage.js";
import SearchComponent from "./components/SearchComponent.js";

// import VerifyEmail from "./components/VerifyEmail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/show" element={<Show />} />
        <Route path="/one" element={<One />} />
        <Route path="/place/:ID" element={<PlaceBid />} />
        <Route path="/showBuy" element={<Buy />} />
        <Route path="/buy/:ID" element={<BuyInfo />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
