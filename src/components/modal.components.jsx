import React from "react";
import { BackDrop, BackdropImage } from "../styles/styles";

export const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    setSelectedImage(null);
    if (e.target.classList.contains("backdrop")) {
    }
  };
  return (
    <BackDrop
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackdropImage
        src={selectedImage}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </BackDrop>
  );
};
