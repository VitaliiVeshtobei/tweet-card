import React from "react";
import { CardList } from "../CardList/CardList";
import { WrapperStyled } from "./WrapperStyled";

export const Wrapper = () => {
  return (
    <WrapperStyled>
      <CardList />
    </WrapperStyled>
  );
};
