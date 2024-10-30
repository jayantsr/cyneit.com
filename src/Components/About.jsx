import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: #13111b; */
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 336px;
`;

const LeftColumn = styled.div`
  flex: 0.35;
  max-width: 35%;
  box-sizing: border-box;
`;

const RightColumn = styled.div`
  flex: 0.65;
  max-width: 65%;
  box-sizing: border-box;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-family: "Inter Display", sans-serif;
  font-size: 104px;
  font-weight: 500;
  line-height: 104px;
  letter-spacing: -2px;
  text-align: left;
  margin: 0;
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-family: Inter;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
`;

const Section = styled.p`
  font-family: "Inter Display", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  text-align: left;
  margin-top: 40px;
`;

const About = () => {
  return (
    <Container>
      <LeftColumn>
        <Title>About Us</Title>
        <Subtitle>We are redefining IT support for UK businesses.</Subtitle>
      </LeftColumn>
      <RightColumn>
        <Section>
          A team of highly skilled IT professionals and project managers with
          expertise across multiple industries. <br />
          <br />
          We provide comprehensive IT solutions, acting as your virtual CTO/CIO
          to streamline your operations, enhance security, and drive digital
          transformation.
        </Section>
        <Section>
          From cloud migration and cybersecurity to IT consulting and managed
          services, we cover every aspect of your IT needs. Whether you're
          seeking to transition to the cloud, optimize your IT infrastructure,
          or boost your online presence, CYNE IT has you covered.
          <br />
          <br />
          We also offer digital marketing and branding services, app
          development, and web design to help you engage your customers and grow
          your business.
        </Section>
      </RightColumn>
    </Container>
  );
};

export default About;
