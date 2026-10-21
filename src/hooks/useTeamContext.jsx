import { createContext, useContext, useState } from "react";

//create a context for user
export const TeamContext = createContext(null);

export function TeamProvider({ children }) {
  const [teams, setTeams] = useState(null);

  return (
    <TeamContext.Provider value={{ teams, setTeams }}>
      {children}
    </TeamContext.Provider>
  );
}

export const useTeams = () => useContext(TeamContext);
