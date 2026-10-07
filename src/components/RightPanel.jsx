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
      <button onClick={testingModal}>Test Modal</button>
      <Modal setModalState={setModalState} modalState={modalState}>
        <div className="modal-body">
          <h4>Title</h4>
          Message
          <div className="Modal-btns">
            <button onClick={testingModal}>Confirm</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RightPanel;
