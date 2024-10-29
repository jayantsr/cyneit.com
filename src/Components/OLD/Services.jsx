import React from "react";
import styled from "styled-components";
import BGI from "../assets/servicesbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Container for the section
const SvcContainer = styled.div`
  height: 928px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0a0a;
  overflow: hidden;
  /* border-width: 1px, 0px, 1px, 0px; */
  border-width: 1px;
  border-style: solid;
  border-top-color: rgb(61, 49, 127);
  border-bottom-color: rgb(61, 49, 127);
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

// Background image styling with dull overlay
const SvcBGImage = styled.div`
  background-image: url(${BGI});
  background-size: cover;
  background-position: center;
  height: 750px;
  width: 100%;
  position: absolute;
  z-index: 1;
  filter: brightness(0.4);
  top: 0px;
`;

const SvcBefore = styled.div`
  position: absolute;
  height: 878px;
  gap: 0px;
  border: 1px;
  opacity: 0px;
  z-index: 3;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0) 0%,
    rgba(10, 10, 10, 0.9) 64.7%,
    #0a0a0a 70.43%
  );
  border-bottom: 1px solid rgba(50, 50, 50, 1);
`;

// Dark overlay on top of the background
const SvcOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Black overlay with 70% opacity */
  z-index: 2; /* Place the overlay above the image */
`;

// Title for the services section
const SvcTitle = styled.h1`
  color: #ffffff;
  position: absolute;
  top: 50px;
  z-index: 3;
  font-family: Inter;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  /* letter-spacing: -0.5px; */
  text-align: left;
  @media screen and (max-width: 768px) {
    width: 290px;
    font-family: Inter;
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
    word-wrap: break-word;
  }
`;

// Container for all the service items
const SvcContent = styled.div`
  width: 1152px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns for services */
  grid-gap: 32px;
  position: relative;
  z-index: 3; /* Above background and overlay */
  margin-top: 50px;
  /* For mobile screens, make it a single column */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 16px; /* Reduced gap for mobile */
    width: 80%;
    margin-top: 200px;
  }
`;

// Individual service item styling
const SvcItem = styled.div`
  width: 320px;
  height: 160px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid;
  border-image-source: linear-gradient(
    106.78deg,
    rgba(255, 255, 255, 0.23) 6.02%,
    rgba(255, 255, 255, 0.0759) 104.65%
  );
  backdrop-filter: blur(40.6px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  color: white;
  position: relative;
  @media screen and (max-width: 769px) {
    width: 90%;
  }
`;

// Icon styling inside each service card
const SvcItemIcon = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 24px;
  color: white;
`;

const SvcIconImg = styled.img`
  width: 44px;
  height: 44px;
  gap: 0px;
  border-radius: 12px;
  border: 1px;
  opacity: 0px;
  background: rgba(255, 255, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(42.79999923706055px);
`;

// Title inside each service card
const SvcItemTitle = styled.h2`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: left;
  margin-bottom: 8px;
  margin-top: 50px;
`;

// Text inside each service card
const SvcItemText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
`;

// Example data for services, including title, text, and an icon for each card
const services = [
  {
    title: "Digital Marketing Services",
    text: "Boost your online presence with tailored strategies to engage your target audience.",
    icon: faPlus,
  },
  {
    title: "Web Development Services",
    text: "Delivering robust and scalable websites that drive business growth.",
    icon: faPlus,
  },
  {
    title: "IT Infrastructure Services",
    text: "Providing reliable and efficient IT systems to support your business operations.",
    icon: faPlus,
  },
  {
    title: "Security Services",
    text: "Protecting your digital assets with advanced security solutions.",
    icon: faPlus,
  },
  {
    title: "Strategic and Operational Consulting",
    text: "Empowering businesses with data-driven insights and expert strategies.",
    icon: faPlus,
  },
  {
    title: "Business Intelligence and Analytics",
    text: "Transforming data into actionable insights for smarter business decisions.",
    icon: faPlus,
  },
  {
    title: "Project Management",
    text: "Ensuring seamless project execution, from planning to delivery.",
    icon: faPlus,
  },
  {
    title: "Compliance and Governance",
    text: "Helping businesses stay compliant with regulations and industry standards.",
    icon: faPlus,
  },
  {
    title: "Additional Potential Services",
    text: "Expanding your capabilities with customized services to meet evolving business needs.",
    icon: faPlus,
  },
];

const Services = () => {
  return (
    <SvcContainer>
      <SvcBGImage />

      <SvcOverlay />
      <SvcBefore />
      <SvcTitle>Explore our services</SvcTitle>
      <SvcContent>
        {services.map((service, index) => (
          <SvcItem key={index}>
            <SvcItemIcon>
              <SvcIconImg src="assets/icon.png" />
              {/* <FontAwesomeIcon icon={service.icon} /> */}
            </SvcItemIcon>
            <SvcItemTitle>{service.title}</SvcItemTitle>
            <SvcItemText>{service.text}</SvcItemText>
          </SvcItem>
        ))}
      </SvcContent>
    </SvcContainer>
  );
};

export default Services;
