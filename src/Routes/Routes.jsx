import React from "react";
import { BrowserRouter as Routeur, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../Pages/home";
import Error from "../Pages/error/error";
import About from "../Pages/about/about";
import Logement from "../Pages/logement/logement";

export default function RoutesApp() {
  return (
    <Routeur>
      <Header />
      <Routes>
        <Route path="/kasa" element={<Home />}></Route>
        <Route path="/logement/@" element={<Logement />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Routeur>
  );
}
