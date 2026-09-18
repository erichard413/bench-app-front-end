import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuthContext";
import { useUser } from "./hooks/useUserContext";
import BenchAppAPI from "./api";
import Home from "./components/home";
import AppHelpers from "./helpers/AppHelpers";

function App() {
  const navigate = useNavigate();
  const { currentToken, setCurrentToken } = useAuth();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (currentToken) AppHelpers.getUserData(currentToken, setUser);
  }, [currentToken]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
