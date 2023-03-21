import styled from "styled-components";

export const Container = styled("div")`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ImgStyled = styled("img")`
  width: 308px;
  height: 168px;
  margin: 28px 36px 18px 36px;
`;

export const LogoStyled = styled("img")`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const ContainerAvatar = styled("div")`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -48%);
`;
export const EclipseStyled = styled("img")`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const EclipseBackStyled = styled("img")`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContainerAvatarStyled = styled("div")`
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const AvatarStyled = styled("img")`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextContainer = styled("div")`
  margin-top: 60px;
  p:last-child {
    margin-top: 16px;
  }
`;

export const TextStyled = styled("p")`
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 20px;
  line-height: 24.38px;
  color: #ebd8ff;
  text-align: center;
`;

export const ButtonStyled = styled("button")`
  display: block;
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 18px;
  line-height: 21.94px;
  color: #373737;
  padding: 14px 56px;
  background-color: ${(p) =>
    p.nameButton === "FOLLOWING" ? "#5CD3A8" : "#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  margin: 26px auto 0 auto;
`;
