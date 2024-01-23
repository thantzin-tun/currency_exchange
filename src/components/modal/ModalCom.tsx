import React from "react";
// import Modal from "react-bootstrap/Modal";

type ModalProps = {
  children: React.ReactNode;
  status: boolean;
  closeModal: () => void;
};

export const ModalCom: React.FC<ModalProps> = ({
  children,
  status,
  closeModal,
}) => {
  return (
    <>
      {/* <Modal show={status} onHide={closeModal}>
        {children}
      </Modal> */}
    </>
  );
};
