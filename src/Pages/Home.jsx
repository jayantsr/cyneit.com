import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import BGI from "../assets/herobanner.png";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

const HeroContainer = styled.div`
  height: 1024px;
  background: #030014;
  @media screen and (max-width: 768px) {
    height: 850px;
  }
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
      <Footer />
    </>
  );
};

export default Home;
