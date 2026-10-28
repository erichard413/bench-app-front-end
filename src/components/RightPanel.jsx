import { useSelectedTeam } from "../hooks/useSelectedTeamContext";
import "../styles/RightPanel.css";
import Modal from "./modals/Modal";
import { useState } from "react";

function RightPanel() {
  const [modalState, setModalState] = useState(false);
  const testingModal = e => {
    e.preventDefault();
    setModalState(s => !s);
  };
  const { selectedTeam } = useSelectedTeam();

  return (
    <div className="RightPanel">
      <ContentBlock>
        <div className="team-overview">
          {selectedTeam && (
            <>
              <div className="content-block-top">
                <h3>Team Overview</h3>
              </div>
              <div className="content-block-middle">
                <div className="logo-container">
                  <img
                    src={selectedTeam.logoUrl}
                    alt={`${selectedTeam.teamName}-logo`}
                  />
                </div>
                <span id="team-name">{selectedTeam.teamName}</span>
              </div>
            </>
          )}
        </div>
      </ContentBlock>
      <ContentBlock>
        <div className="team-overview">
          <div className="content-block-top">
            <h3>Recent Activity</h3>
          </div>
          <div className="content-block-middle"></div>
        </div>
      </ContentBlock>
      <ContentBlock>
        <div className="team-overview">
          <div className="content-block-top">
            <h3>Upcoming Games</h3>
          </div>
          <div className="content-block-middle"></div>
        </div>
      </ContentBlock>
    </div>
  );
}

function ContentBlock({ children }) {
  return <div className="ContentBlock">{children}</div>;
}

export default RightPanel;
