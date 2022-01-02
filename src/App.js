import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./components/mainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
