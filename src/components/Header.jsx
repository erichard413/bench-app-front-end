import "../styles/Header.css";
import { useState } from "react";
import AccountDropDown from "./AccountDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useTeams } from "../hooks/useTeamContext";
import TeamsDropDown from "./TeamsDropDown";
import { useSelectedTeam } from "../hooks/useSelectedTeamContext";

function Header({ isMenuExpanded }) {
  const [isAccountExpanded, setIsAccountExpanded] = useState(false);
  const [isTeamsDropdownExpanded, setIsTeamsDropdownExpanded] = useState(false);
  const { team, setTeam } = useTeams();
  const { selectedTeam, setSelectedTeam } = useSelectedTeam();

  const handleAccountToggle = e => {
    setIsAccountExpanded(e => !e);
  };

  const handleTeamToggle = e => {
    setIsTeamsDropdownExpanded(e => !e);
  };

  return (
    <>
      <div
        className="Header"
        style={{ paddingLeft: isMenuExpanded ? "17vw" : "60px" }}
      >
        <div className="logo-container">
          {selectedTeam && (
            <img src={selectedTeam.logoUrl} alt="ALT_TEXT_FOR_LOGO" />
          )}
        </div>
        <h2>{selectedTeam && selectedTeam.teamName}</h2>
        <span className="down-chevron">
          <FontAwesomeIcon
            icon={isTeamsDropdownExpanded ? faChevronUp : faChevronDown}
            onClick={handleTeamToggle}
          />
        </span>
        <div className="right-corner">
          <select id="season" name="season">
            <option value="fall2026" selected>
              Fall 2026
            </option>
            <option value="summer2026">Summer 2026</option>
            <option value="spring2026">Spring 2026</option>
          </select>
          <div className="bell-container">
            <FontAwesomeIcon id="bell" icon={faBell} />
            <span id="bell-notification"></span>
          </div>{" "}
          <div className="header-user-section">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvC22o9VLFSh66ZghPCTley290Tf-laMPdSjpnp9bKQ&s=10" />
            <span className="down-chevron">
              <FontAwesomeIcon
                icon={isAccountExpanded ? faChevronUp : faChevronDown}
                onClick={handleAccountToggle}
              />
            </span>
          </div>
        </div>
      </div>
      <AccountDropDown expanded={isAccountExpanded} />
      <TeamsDropDown
        expanded={isTeamsDropdownExpanded}
        isMenuExpanded={isMenuExpanded}
        setExpanded={setIsTeamsDropdownExpanded}
      />
    </>
  );
}

export default Header;
