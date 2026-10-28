import { createContext, useContext, useState } from "react";

//create a context for user
export const SelectedTeamContext = createContext(null);

export function SelectedTeamProvider({ children }) {
  const [selectedTeam, setSelectedTeam] = useState([]);
  return (
    <SelectedTeamContext.Provider value={{ selectedTeam, setSelectedTeam }}>
      {children}
    </SelectedTeamContext.Provider>
  );
}

export const useSelectedTeam = () => useContext(SelectedTeamContext);
