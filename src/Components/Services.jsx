import React from "react";
import styled from "styled-components";
import BGI from "../assets/servicesbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Container for the section
const SvcContainer = styled.div`
  height: 928px;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0a0a;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: rgba(61, 49, 127, 0.2);
  overflow: hidden;
`;

// Background image styling with dull overlay
const SvcBGImage = styled.div`
  background-image: url(${BGI});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  filter: brightness(0.4); /* This makes the background image dull */
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
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  position: absolute;
  top: 50px;
  z-index: 3;
`;

// Container for all the service items
const SvcContent = styled.div`
  width: 1152px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns for services */
  grid-gap: 24px; /* Space between items */
  position: relative;
  z-index: 3; /* Above background and overlay */
  margin-top: 150px; /* Adjust for spacing below the title */
`;

// Individual service item styling
const SvcItem = styled.div`
  width: 364px;
  height: 192px;
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
`;

// Icon styling inside each service card
const SvcItemIcon = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 24px;
  color: white;
`;

// Title inside each service card
const SvcItemTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

// Text inside each service card
const SvcItemText = styled.p`
  font-size: 14px;
  line-height: 20px;
  opacity: 0.75;
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
      <SvcTitle>Explore our services</SvcTitle>
      <SvcContent>
        {services.map((service, index) => (
          <SvcItem key={index}>
            <SvcItemIcon>
              <FontAwesomeIcon icon={service.icon} />
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
