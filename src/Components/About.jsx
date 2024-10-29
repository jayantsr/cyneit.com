import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const SectionTitle = styled.div`
  font-family: Inter;
  font-size: 104px;
  font-weight: 500;
  line-height: 104px;
  letter-spacing: -2px;
  text-align: left;
  color: #ffffff;
`;
const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;
const SectionDesc = styled.div`
  p {
    font-family: Inter;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
    color: #ffffff;
  }
`;

const About = () => {
  return (
    <>
      <Wrapper>
        <SectionTitle>About Us</SectionTitle>
        <SectionContainer>
          <SectionDesc>
            <p>We are redefining IT support for UK businesses. </p>
          </SectionDesc>
          <SectionDesc>
            <p>
              A team of highly skilled IT professionals and project managers
              with expertise across multiple industries.
            </p>
            <p>
              We provide comprehensive IT solutions, acting as your virtual
              CTO/CIO to streamline your operations, enhance security, and drive
              digital transformation.
            </p>
            <p>
              From cloud migration and cybersecurity to IT consulting and
              managed services, we cover every aspect of your IT needs. Whether
              you're seeking to transition to the cloud, optimize your IT
              infrastructure, or boost your online presence, CYNE IT has you
              covered. 
            </p>
            <p>
              We also offer digital marketing and branding services, app
              development, and web design to help you engage your customers and
              grow your business.
            </p>
          </SectionDesc>
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default About;
