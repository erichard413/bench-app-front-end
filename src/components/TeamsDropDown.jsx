import "../styles/Header.css";
import { useTeams } from "../hooks/useTeamContext";
import { useSelectedTeam } from "../hooks/useSelectedTeamContext";

function TeamsDropDown({ expanded, isMenuExpanded, setExpanded }) {
  const { teams } = useTeams();
  const { setSelectedTeam } = useSelectedTeam();
  console.log(teams);
  const handleTeamSelection = t => {
    setSelectedTeam(t);
    setExpanded(false);
  };
  return (
    <div
      className={"TeamsDropDown " + (expanded && "expanded")}
      style={{ left: isMenuExpanded ? "18vw" : "75px" }}
    >
      <ul>
        {teams &&
          teams.map(t => (
            <li onClick={() => handleTeamSelection(t)}>
              <img src={t.logoUrl} alt={`${t.teamName}-logo`}></img>
              {t.teamName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TeamsDropDown;
