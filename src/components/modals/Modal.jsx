import {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import "../../styles/modals/Modal.css";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

function Modal({
  setModalState,
  modalState,
  modalMessage = null,
  modalTitle = null,
  navTo = null,
  children,
}) {
  const prevIsOpen = useRef();
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    prevIsOpen.current = modalState;
  }, []);

  useEffect(() => {
    const body = document.body;

    if (!modalState) return;

    body.addEventListener("click", clickHandle);

    return () => {
      body.removeEventListener("click", clickHandle);
    };
  }, [modalState]);

  useLayoutEffect(() => {
    if (!modalState && prevIsOpen.current) {
      setIsClosing(state => !state);
    }
    prevIsOpen.current = modalState;
  }, [modalState]);

  ///
  const handleClose = () => {
    setModalState(false);
  };

  const clickHandle = e => {
    if (e.target.className === "overlay") {
      handleClose();
    }
  };

  return createPortal(
    <>
      {(modalState || isClosing || prevIsOpen.current) && (
        <div className={`Modal ${isClosing ? "closing" : ""} `}>
          <div
            className="overlay"
            onAnimationEnd={() => {
              if (isClosing) {
                setIsClosing(false);
                if (navTo) navigate(navTo);
              }
            }}
          ></div>
          {Children.map(children, child => {
            if (!isValidElement(child)) return null;
            return cloneElement(child, {
              ...child.props,
              handleClose: handleClose,
            });
          })}
        </div>
      )}
    </>,
    document.body,
  );
}

export default Modal;
