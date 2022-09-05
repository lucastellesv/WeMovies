import React from "react";
import GlobalStyle from "./styles/global";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Finish from "./pages/Finish";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </>
  );
}

export default App;
