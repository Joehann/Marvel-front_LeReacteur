import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/shared/Header/Header";
import Comic from "./containers/Comics.js";
import Home from "./containers/Home";
import Character from "./containers/Character";
import Navbar from "./components/shared/Navbar/Navbar";
import SearchInput from "./components/shared/SearchInput/SearchInput";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header />
      <Navbar />
      <SearchInput search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />}></Route>
        <Route path="/comics" element={<Comic search={search} />}></Route>
        <Route path="/character/:characterId" element={<Character />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
