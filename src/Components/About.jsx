import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 32px;
    width: 100%;
  }
`;

const LeftColumn = styled.div`
  flex: 0.35;
  max-width: 35%;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex: 1;
    height: auto;
  }
`;

const RightColumn = styled.div`
  flex: 0.65;
  max-width: 65%;
  box-sizing: border-box;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex: 1;
    margin-top: 0;
  }
`;

const Title = styled.h1`
  font-family: Inter;
  font-size: 56px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: -2px;
  text-align: left;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-family: Inter;
    margin-top: 20px;
    font-size: 48px;
    font-weight: 500;
    line-height: 52px;
    letter-spacing: -2px;
    text-align: left;
  }
`;

const Subtitle = styled.p`
  width: 300px;
  margin-top: 20px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
`;

const Section = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <LeftColumn>
        <Title>About Us</Title>
        <Subtitle>We are redefining IT support for UK businesses.</Subtitle>
      </LeftColumn>
      <RightColumn>
        <Section>
          A team of highly skilled IT professionals and project managers with
          expertise across multiple industries.
        </Section>
        <Section>
          We provide comprehensive IT solutions, acting as your virtual CTO/CIO
          to streamline your operations, enhance security, and drive digital
          transformation.
        </Section>
        <Section>
          From cloud migration and cybersecurity to IT consulting and managed
          services, we cover every aspect of your IT needs. Whether you're
          seeking to transition to the cloud, optimize your IT infrastructure,
          or boost your online presence, CYNE has you covered.
        </Section>
        <Section>
          We also offer digital marketing and branding services, app
          development, and web design to help you engage your customers and grow
          your business.
        </Section>
      </RightColumn>
    </Container>
  );
};

export default About;
