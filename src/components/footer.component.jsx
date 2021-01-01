import React from "react";
import { FooterContainer } from "../styles/styles";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer = ({ DateYear, FooterDesc }) => {
  return (
    <FooterContainer>
      {FooterDesc} {DateYear} &nbsp;
      <AiOutlineCopyrightCircle />
    </FooterContainer>
  );
};
