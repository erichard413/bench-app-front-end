import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuthContext";
import { useUser } from "./hooks/useUserContext";
import { useTeam } from "./hooks/useTeamContext";
import Home from "./components/Home";
import Login from "./components/Login";
import AppHelpers from "./helpers/AppHelpers";
import "./App.css";
import Signup from "./components/Signup";
import LoadingSpinner from "./components/Loading";

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const { currentToken } = useAuth();
  const { user, setUser } = useUser();
  const { team, setTeam } = useTeam();

  console.log(team);

  useEffect(() => {
    // if no token, do not authenticate.
    if (!currentToken) {
      setAuthLoading(false);
      return;
    }
    // token exists, attempt to retrieve user.
    AppHelpers.getUserData(currentToken, setUser, setAuthLoading, setTeam);
  }, [currentToken]);

  // Don't do routing until auth is checked
  if (authLoading) {
    return (
      <LoadingSpinner message="Authenticating..." fullScreen size="large" />
    );
  }

  return (
    <>
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
              currentToken && user ? (
                <Navigate to="/" replace />
              ) : (
                <Login authLoading={authLoading} />
              )
            }
          />
          <Route
            exact
            path="/signup"
            element={
              currentToken && user ? <Navigate to="/" replace /> : <Signup />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
