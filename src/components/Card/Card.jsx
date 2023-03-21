import React, { useEffect, useState } from "react";
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
  ContainerAvatarStyled,
} from "./CardStyled";
import image from "../../assets/picture21.png";
import logo from "../../assets/Logo.png";
import rectangle from "../../assets/Rectangle 1.png";
import eclipse from "../../assets/Ellipse 1 (Stroke).png";
import eclipseBack from "../../assets/Ellipse 1.png";

import {
  getTweets,
  setFirstTweet,
  setTweet,
  getLocalTweet,
} from "../../localstorage/localstorage";
export const Card = ({ userInfo }) => {
  const [followers, setFollowers] = useState(userInfo.followers);
  const [nameButton, setNameButton] = useState("FOLLOW");

  useEffect(() => {
    const localTweet = getLocalTweet(userInfo.id);

    if (localTweet) {
      setFollowers(localTweet.followers);
      setNameButton(localTweet.nameButton);
    }
  }, [userInfo.id]);

  const handleClick = () => {
    if (nameButton === "FOLLOW") {
      setFollowers((prev) => prev + 1);
      setNameButton("FOLLOWING");
      const tweets = getTweets();
      tweets
        ? setTweet(userInfo.id, "FOLLOWING", userInfo.followers + 1)
        : setFirstTweet(userInfo.id, nameButton, userInfo.followers + 1);
      return;
    }
    setFollowers((prev) => prev - 1);
    setNameButton("FOLLOW");
    setTweet(userInfo.id, "FOLLOW", userInfo.followers);
  };

  return (
    <Container>
      <LogoStyled src={logo} alt="foto" />
      <ImgStyled src={image} alt="foto" />
      <img src={rectangle} alt="rectnagle" />
      <ContainerAvatar>
        <EclipseStyled src={eclipse} alt="eclipse" />
        <EclipseBackStyled src={eclipseBack} alt="eclipse-back" />
        <ContainerAvatarStyled>
          <AvatarStyled src={userInfo.avatar} alt="avatar" />
        </ContainerAvatarStyled>
      </ContainerAvatar>
      <TextContainer>
        <TextStyled>{userInfo.tweets} TWEETS</TextStyled>
        <TextStyled>
          {followers.toLocaleString().replace(/\s/g, ",")} FOLLOWERS
        </TextStyled>
      </TextContainer>
      <ButtonStyled onClick={handleClick} type="button" nameButton={nameButton}>
        {nameButton}
      </ButtonStyled>
    </Container>
  );
};
