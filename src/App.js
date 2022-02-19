import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/shared/Header/Header";
import Comic from "./containers/Comics.js";
import Home from "./containers/Home";
import Character from "./containers/Character";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [favoritesCharacters, setFavoritesCharacters] = useState(
    JSON.parse(localStorage.getItem("favoritesCharacters")) || []
  );

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              setIsStarted={setIsStarted}
              isStarted={isStarted}
            />
          }
        ></Route>
        <Route
          path="/comics"
          element={<Comic search={search} setSearch={setSearch} />}
        ></Route>
        <Route
          path="/character/:characterId"
          element={
            <Character
              setFavoritesCharacters={setFavoritesCharacters}
              favoritesCharacters={favoritesCharacters}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
