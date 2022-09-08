import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar1 from './component/Navbar.js';
import Slider from './component/Slider';
import Example from './component/Examples'
import Footer from './component/Footer';
import Counter from './component/Counter';
// import Counter1 from './component/Counter1';
// import { Countercontext2 } from "./Countercontext/Countercontext";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Routes/Home";
import Error from "./Routes/Error";
import Cards2 from "./Routes/Cards2";
import Aboutus from "./Routes/Aboutus";
import Info from "./Routes/Info";

function App() {
  return (
    <>


      <Navbar1 />
      <br></br>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"}></Navigate>} />
        <Route path="/home" element={<Home />} exact />
        <Route path="*" element={<Error />} />
        <Route path="/cards" element={<Cards2 />} exact />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/info/:id" element={<Info/>} ></Route>
      </Routes>
      {/* <Slider />{`${match.path}/song/:songID`}
          <Example />
          <Counter1 /> */}
      <Footer />
      {/* <Counter/> */}


    </>
  );
}

export default App;
