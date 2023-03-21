import React from "react";
import { Card } from "../Card/Card";
import data from "../../data/data.json";
import { CardListStyled } from "./CardListStyled";

export const CardList = () => {
  return (
    <CardListStyled>
      {data.map(({ id, tweets, followers, avatar }) => (
        <li key={id}>
          <Card userInfo={{ id, tweets, followers, avatar }} />
        </li>
      ))}
    </CardListStyled>
  );
};
