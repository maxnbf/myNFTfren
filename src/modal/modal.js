import React, { useContext } from "react";
import ReactDOM, { createPortal } from "react-dom";
import { ModalContext } from "./modalContext";
import { ModalBody, ModalClose, ModalContainer, ModalContent } from "./style";

const Modal = () => {
  let { modalContent, handleModal, modal } = useContext(ModalContext);
  if (modal) {
    return createPortal(
      <ModalContainer>
        <ModalBody>
          <ModalClose
            onClick={() => handleModal()}
          >
            &times;
          </ModalClose>
          <ModalContent>{modalContent}</ModalContent>
        </ModalBody>
      </ModalContainer>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;
