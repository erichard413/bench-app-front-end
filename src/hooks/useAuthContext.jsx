import { createContext, useContext, useState, useEffect } from "react";
import BenchAppAPI from "../api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // create state to store token
  // retrieve token from local storage. if no token exists, set it to null.
  const [currentToken, setCurrentToken] = useState(
    () => localStorage.getItem("token") || null,
  );
  useEffect(() => {
    if (currentToken) {
      // if there's a token, save it to local storage and store it on the BenchAppAPI class
      localStorage.setItem("token", currentToken);
      //
      BenchAppAPI.setToken(currentToken);
    } else {
      localStorage.removeItem("token");
      BenchAppAPI.setToken(null);
    }
  }, [currentToken]);

  return (
    <AuthContext.Provider value={{ currentToken, setCurrentToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
