import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import About from "../Components/About";
import Contact from "../Components/Contact";
import WrCyne from "../Components/WrCyne";
import Footer from "../Components/Footer";

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div`
  width: 90%;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <PageWrapper>
        <ContentWrapper>
          <Services />
          <About />
          <Contact />
          <Footer />
        </ContentWrapper>
      </PageWrapper>
      <WrCyne />
    </>
  );
};

export default Home;
