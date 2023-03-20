import React from "react";
import {
  Container,
  ImgStyled,
  LogoStyled,
  ContainerAvatar,
  EclipseStyled,
  EclipseBackStyled,
  AvatarStyled,
  TextStyled,
  TextContainer,
  ButtonStyled,
} from "./CardStyled";
import image from "../../assets/picture21.png";
import logo from "../../assets/Logo.png";
import rectangle from "../../assets/Rectangle 1.png";
import eclipse from "../../assets/Ellipse 1 (Stroke).png";
import eclipseBack from "../../assets/Ellipse 1.png";
import avatar from "../../assets/Hansel.png";
export const Card = () => {
  return (
    <Container>
      <LogoStyled src={logo} alt="foto" />
      <ImgStyled src={image} alt="foto" />
      <img src={rectangle} alt="rectnagle" />
      <ContainerAvatar>
        <EclipseStyled src={eclipse} alt="eclipse" />
        <EclipseBackStyled src={eclipseBack} alt="eclipse-back" />
        <AvatarStyled src={avatar} alt="avatar" />
      </ContainerAvatar>
      <TextContainer>
        <TextStyled>777 TWEETS</TextStyled>
        <TextStyled>100,500 FOLLOWERS</TextStyled>
      </TextContainer>
      <ButtonStyled type="button">FOLLOW</ButtonStyled>
    </Container>
  );
};
