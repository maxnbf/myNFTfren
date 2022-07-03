import React, { createContext } from "react";
import { useModal } from "./useModal"
import Modal from "./modal";

let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
