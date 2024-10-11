import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import BGI from "../assets/herobanner.png";
import Services from "../Components/Services";

const HeroContainer = styled.div`
  height: 1024px;
  background: #030014;
`;

const HeroBanner = styled.div`
  height: 704px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HeroContainer>
        <HeroBanner>
          <Hero
            image={BGI}
            title={"Curating Your New Exposure"}
            subtitle={"EXPERT IT TEAM AT HALF THE COST"}
          />
        </HeroBanner>
      </HeroContainer>
      <Services />
    </>
  );
};

export default Home;
