// import { createContext, useContext, useState, useEffect } from "react";
// import BenchAppAPI from "../api";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   // create state to store token
//   // retrieve token from local storage. if no token exists, set it to null.
//   const token = localStorage.getItem("token") || null;
//   const [currentToken, setCurrentToken] = useState(token == null ? "" : token);
//   useEffect(() => {
//     if (token !== null) {
//       // if there's a token, save it to local storage and store it on the BenchAppAPI class
//       console.log("setting token");
//       localStorage.setItem("token", currentToken);
//       //
//       BenchAppAPI.setToken(currentToken);
//     }
//   }, [currentToken]);

//   return (
//     <AuthContext.Provider value={{ currentToken, setCurrentToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState, useEffect } from "react";
import BenchAppAPI from "../api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage only once.
  const [currentToken, setCurrentToken] = useState(() =>
    localStorage.getItem("token"),
  );

  useEffect(() => {
    if (currentToken) {
      // Persist the current token and configure API requests.
      localStorage.setItem("token", currentToken);
      BenchAppAPI.setToken(currentToken);
    } else {
      // Clear authentication when logged out.
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
