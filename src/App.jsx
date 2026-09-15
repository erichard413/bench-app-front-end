import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/home";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
