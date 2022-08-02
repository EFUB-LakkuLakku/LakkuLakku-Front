import React from "react";
import ModalFrame from "./ModalFrame";

const TutorialModal = ({ handleModal }) => {
  return (
    <ModalFrame _handleModal={handleModal}>
      <h1>내용</h1>
    </ModalFrame>
  );
};

export default TutorialModal;
