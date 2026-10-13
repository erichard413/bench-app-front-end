import "../styles/RightPanel.css";
import Modal from "./modals/Modal";
import { useState } from "react";

function RightPanel() {
  const [modalState, setModalState] = useState(false);
  const testingModal = e => {
    e.preventDefault();
    setModalState(s => !s);
  };
  return (
    <div className="RightPanel">
      <ContentBlock>
        <div className="team-overview">
          <div className="content-block-top">
            <h3>Team Overview</h3>
          </div>
          <div className="content-block-middle">
            <div className="logo-container">
              <img
                src="https://t3.ftcdn.net/jpg/19/64/59/76/360_F_1964597606_N2qrUR69czkCsxsScELpCQj64EOJlUiv.jpg"
                alt="ALT_TEXT_FOR_LOGO"
              />
            </div>
            <span id="team-name">Hockey Team #1</span>
          </div>
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
//  <Modal setModalState={setModalState} modalState={modalState}>
//         <div className="modal-body">
//           <h4>Title</h4>
//           Message
//           <div className="Modal-btns">
//             <button onClick={testingModal}>Confirm</button>
//           </div>
//         </div>
//       </Modal>
