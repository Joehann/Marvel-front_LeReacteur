import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Header from "./components/shared/Header/Header";
import Comic from "./containers/Comics.js";
import Home from "./containers/Home";
import Navbar from "./components/shared/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <SearchInput />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/comics" element={<Comic />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
