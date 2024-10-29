import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;
const BG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BgContent = styled.div`
  position: absolute;
  width: 100%;
  top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: none;
  @media screen and (max-width: 768px) {
    top: 100px;
  }
`;

const BannerTitle = styled.h1`
  font-family: Inter;
  font-size: 88px;
  font-weight: 600;
  line-height: 0px;
  letter-spacing: -4px;
  text-align: center;
  background: none;
  @media screen and (max-width: 768px) {
    width: 312px;
    font-family: Inter;
    font-size: 48px;
    font-weight: 600;
    line-height: 52px;
    letter-spacing: -2px;
    text-align: center;
  }
`;

const SubTitlecontainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 9px;
  isolation: isolate;
  justify-content: center;
  position: absolute;
  width: 578px;
  height: 140px;
  left: calc(50% - 578px / 2);
  top: 130px;
  background: linear-gradient(0deg, rgba(4, 1, 21, 0.1), rgba(4, 1, 21, 0.1)),
    radial-gradient(
      50% 50% at 50% 50%,
      rgba(168, 127, 255, 0.04) 0%,
      rgba(168, 127, 255, 0) 100%
    );
  backdrop-filter: blur(34px);

  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 0px 0px 9px rgba(255, 255, 255, 0.03);
  border-radius: 24px;

  @media screen and (max-width: 768px) {
    width: 367.44px;
    height: 89px;
    left: auto;
    top: 200px;
  }
`;

const SubTitle = styled.h2`
  font-size: 24px;
  background: none;
  @media screen and (max-width: 768px) {
    font-family: Inter;
    font-size: 15.26px;
    font-weight: 600;
    line-height: 15.26px;
    text-align: left;
  }
`;

const Desccontainer = styled.div`
  top: 620px;
  background: none;
  position: relative;

  @media screen and (max-width: 768px) {
    top: 400px;
    height: 200px;
  }
`;

const HeroDesc = styled.p`
  width: 850px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  background: none;
  @media screen and (max-width: 768px) {
    width: 359px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }
`;

const Hero = (props) => {
  return (
    <>
      <Wrapper>
        <BG src={props.image} />
        <BgContent>
          <BannerTitle>{props.title}</BannerTitle>
          <SubTitlecontainer>
            <SubTitle>{props.subtitle}</SubTitle>
          </SubTitlecontainer>
          <Desccontainer>
            <HeroDesc>
              At CYNE IT Virtual Solutions Ltd, we are redefining IT support for
              UK businesses. Our team of expert IT professionals and project
              managers acts as your virtual CTO/CIO, delivering tailored
              solutions that can reduce your IT costs by over 50%. Explore our
              range of services and discover how we can help your business
              thrive in the digital age.
            </HeroDesc>
          </Desccontainer>
        </BgContent>
      </Wrapper>
    </>
  );
};

export default Hero;
