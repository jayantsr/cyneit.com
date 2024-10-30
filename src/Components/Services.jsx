import React from "react";
import styled from "styled-components";
import Union from "../assets/Union.png";
import Diamond from "../assets/Diamond.png";
import Elipse from "../assets/Elipse.png";
import BImg from "../assets/SVG.svg";

const Wrapper = styled.div`
  position: relative;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SectionTitleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const SectionSubTitle = styled.h4`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const SectionTitle = styled.h2`
  font-family: Inter;
  font-size: 104px;
  font-weight: 500;
  line-height: 104px;
  letter-spacing: -2px;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 64px;
    line-height: 64px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 64px;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const CardBorder = styled.div`
  overflow: hidden;
  display: flex;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  width: 512px;

  padding: 2px; // Thickness of the border
  border-radius: 12px;
  background: linear-gradient(
    106.78deg,
    rgba(255, 255, 255, 0.23) 6.02%,
    rgba(255, 255, 255, 0.0759) 104.65%
  );

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Card = styled.div`
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 320px;

  /* height: 100%; */
  background: #13111b;
  border-radius: 10px; // Slightly less than the wrapper to keep border visible
  backdrop-filter: blur(40.6px);
`;

const Icon = styled.img`
  background: transparent;
  margin-right: 0;
  margin-left: auto;
`;

const Bullet = styled.img`
  padding-right: 12px;
`;

const ServiceList = styled.div`
  background: transparent;
  margin-top: 52px;
`;

const ServiceItem = styled.p`
  background: transparent;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

const Services = () => {
  return (
    <>
      <Wrapper>
        <SectionTitleContainer>
          <SectionSubTitle>Explore our range of</SectionSubTitle>
          <SectionTitle>Services</SectionTitle>
        </SectionTitleContainer>
        <CardContainer>
          <CardBorder>
            <CardWrapper>
              <Card>
                <Icon src={Elipse} style={{ width: "140px", height: "84px" }} />
                <ServiceList>
                  <ServiceItem>
                    <Bullet src={BImg} /> Digital Marketing
                  </ServiceItem>
                  <ServiceItem>
                    <Bullet src={BImg} /> Web Development
                  </ServiceItem>
                  <ServiceItem>
                    <Bullet src={BImg} /> IT Infrastructure Services
                  </ServiceItem>
                </ServiceList>
              </Card>
            </CardWrapper>
          </CardBorder>
          <CardBorder>
            <CardWrapper>
              <Card>
                <Icon src={Diamond} style={{ width: "90px", height: "84px" }} />
                <ServiceList>
                  <ServiceItem>
                    <Bullet src={BImg} /> Security Services
                  </ServiceItem>
                  <ServiceItem>
                    <Bullet src={BImg} /> Strategic & Operational Consulting
                  </ServiceItem>
                  <ServiceItem>
                    <Bullet src={BImg} /> Business Intelligence & Analytics
                  </ServiceItem>
                </ServiceList>
              </Card>
            </CardWrapper>
          </CardBorder>

          <CardBorder>
            <CardWrapper>
              <Card>
                <Icon src={Union} style={{ width: "84px", height: "84px" }} />
                <ServiceList>
                  <ServiceItem>
                    <Bullet src={BImg} /> Project Management
                  </ServiceItem>
                  <ServiceItem>
                    <Bullet src={BImg} /> Compliance & Governance
                  </ServiceItem>
                  <ServiceItem>
                    <Bullet src={BImg} /> Additional Potential Services
                  </ServiceItem>
                </ServiceList>
              </Card>{" "}
            </CardWrapper>
          </CardBorder>
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default Services;
