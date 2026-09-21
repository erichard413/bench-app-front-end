import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuthContext";
import { useUser } from "./hooks/useUserContext";
import Home from "./components/Home";
import Login from "./components/Login";
import AppHelpers from "./helpers/AppHelpers";

function App() {
  const navigate = useNavigate();
  const [authLoading, setAuthLoading] = useState(true);
  const { currentToken, setCurrentToken } = useAuth();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (currentToken) AppHelpers.getUserData(currentToken, setUser);
  }, [currentToken]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
