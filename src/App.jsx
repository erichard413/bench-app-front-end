import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuthContext";
import { useUser } from "./hooks/useUserContext";
import { useTeams } from "./hooks/useTeamContext";
import Home from "./components/Home";
import Login from "./components/Login";
import AppHelpers from "./helpers/AppHelpers";
import "./App.css";
import Signup from "./components/Signup";
import LoadingSpinner from "./components/Loading";
import BenchAppAPI from "./api";
import { useSelectedTeam } from "./hooks/useSelectedTeamContext";

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const { currentToken, setCurrentToken } = useAuth();
  const { user, setUser } = useUser();
  const { teams, setTeams } = useTeams();
  const { selectedTeam, setSelectedTeam } = useSelectedTeam();

  console.log("Current token:", currentToken);
  console.log("API token:", BenchAppAPI.token);
  console.log("Current user:", user);
  console.log("Auth loading:", authLoading);

  useEffect(() => {
    async function authenticate() {
      // if no token
      if (!currentToken) {
        setUser(null);
        setTeams([]);
        setAuthLoading(false);
        return;
      }

      setAuthLoading(true);

      // Ensure the API has the current token before making requests.
      BenchAppAPI.setToken(currentToken);
      // By now there's a token, so try to load data.
      await AppHelpers.getUserData(
        currentToken,
        setUser,
        setAuthLoading,
        setCurrentToken,
      );
    }

    authenticate();
  }, [currentToken, setUser]);

  useEffect(() => {
    async function getUserTeams(userId) {
      const teams = await BenchAppAPI.getTeams(userId);
      console.log("***GETTING TEAMS***");
      console.log(teams);
      setTeams(teams || []);
      if (teams[0]) setSelectedTeam(teams[0]);
    }
    if (user) {
      getUserTeams(user.id);
    }
  }, [user]);

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
              currentToken && user ? <Navigate to="/" replace /> : <Login />
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
