import React, { useEffect, useState } from "react";
import SwirlBackground from "../Components/SwirlBackground";
import styled from "styled-components";
import titlesData from "../assets/data/titles.json";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    top: 0;
  }
`;

const HeadContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 10;
`;

const HeadTitle = styled.h2`
  background: transparent;
  width: 1050px;
  color: #ffffff;
  font-family: "Inter";
  font-size: 128px;
  font-weight: 500;
  line-height: 132px;
  letter-spacing: -2px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 10vw;
    line-height: 50px;
  }
`;

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 150; // Adjusted speed of typing each character in ms
  const pauseBetweenTitles = 3000; // Pause after each full title (3 seconds)

  useEffect(() => {
    const title = titlesData.titles[currentTitleIndex];
    let charIndex = 0;
    let typingTimeout;

    const typeTitle = () => {
      if (charIndex < title.length) {
        setDisplayedText(title.slice(0, charIndex + 1));
        charIndex += 1;
        typingTimeout = setTimeout(typeTitle, typingSpeed);
      } else {
        // Pause before moving to the next title
        typingTimeout = setTimeout(() => {
          setDisplayedText("");
          setCurrentTitleIndex(
            (prevIndex) => (prevIndex + 1) % titlesData.titles.length
          );
        }, pauseBetweenTitles);
      }
    };

    typeTitle();

    return () => clearTimeout(typingTimeout); // Clear timeout on unmount to avoid overlap
  }, [currentTitleIndex]);

  return (
    <>
      <Wrapper>
        <Container>
          <SwirlBackground />
        </Container>
        <HeadContainer>
          <HeadTitle>{displayedText}</HeadTitle>
        </HeadContainer>
      </Wrapper>
    </>
  );
};

export default Hero;
