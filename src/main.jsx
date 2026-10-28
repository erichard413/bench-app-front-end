import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./hooks/useAuthContext.jsx";
import { UserProvider } from "./hooks/useUserContext.jsx";
import { TeamProvider } from "./hooks/useTeamContext.jsx";
import { SelectedTeamProvider } from "./hooks/useSelectedTeamContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <TeamProvider>
            <SelectedTeamProvider>
              <App />
            </SelectedTeamProvider>
          </TeamProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
