import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";
import "./css/index.css";

import { BrowserRouter as Routeur, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Pages/home";
import Error from "./components/Pages/error/error";
import About from "./components/Pages/about/about";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routeur>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logement"></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Routeur>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
