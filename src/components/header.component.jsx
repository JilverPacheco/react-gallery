import React from "react";
import { HeadContainer } from "../styles/styles";
import { GiFlowers } from "react-icons/gi";

export const Header = ({ AppName }) => {
  return (
    <HeadContainer>
      {AppName}
      &nbsp;
      <GiFlowers />
    </HeadContainer>
  );
};
