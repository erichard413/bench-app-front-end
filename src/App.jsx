import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuthContext";
import { useUser } from "./hooks/useUserContext";
import Home from "./components/Home";
import Login from "./components/Login";
import AppHelpers from "./helpers/AppHelpers";
import "./App.css";

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const { currentToken } = useAuth();
  const { user, setUser } = useUser();

  useEffect(() => {
    // if no token, do not authenticate.
    if (!currentToken) {
      setAuthLoading(false);
      return;
    }
    // token exists, attempt to retrieve user.
    AppHelpers.getUserData(currentToken, setUser, setAuthLoading);
  }, [currentToken, setUser]);

  // Don't do routing until auth is checked
  if (authLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            currentToken && user ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          exact
          path="/login"
          element={
            currentToken && user ? <Navigate to="/" replace /> : <Login />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
