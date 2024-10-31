import React from "react";
import styled from "styled-components";
import map from "../assets/Map.png";
const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 114px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 50%;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 32px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  max-width: 50%;
  box-sizing: border-box;
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-family: "Inter Display", sans-serif;
  font-size: 104px;
  font-weight: 500;
  line-height: 104px;
  letter-spacing: -2px;
  text-align: left;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-family: Inter;
    font-size: 48px;
    font-weight: 500;
    line-height: 52px;
    letter-spacing: -2px;
    text-align: left;
  }
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-family: Inter;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
`;

const FormContainer = styled.div`
  color: #a0a0a0;
  max-width: 768px;
  margin-top: 48px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const FormTitle = styled.h2`
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #908f8c;
  padding-bottom: 16px;
  @media screen and (max-width: 768px) {
  }
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
  }
`;

const Label = styled.label`
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  background: transparent;

  color: #908f8c;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  @media screen and (max-width: 768px) {
  }
`;

const MsgLabel = styled.label`
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  background: transparent;
  color: #908f8c;
  position: absolute;
  left: 16px;
  top: 20%;
  transform: translateY(-50%);
  pointer-events: none;
  @media screen and (max-width: 768px) {
  }
`;

const Input = styled.input`
  width: 100%;
  height: 80px;
  background-color: #13111b;
  color: #a0a0a0;
  border: none;
  padding: 16px;
  padding-left: 80px; /* Add space for the label */
  padding-right: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  text-align: right; /* Aligns the placeholder to the right */

  &::placeholder {
    color: #a0a0a0;
  }
  @media screen and (max-width: 768px) {
    &::placeholder {
      color: transparent;
    }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background-color: #13111b;
  color: #a0a0a0;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  text-align: left; /* Aligns the placeholder to the right */
  resize: none;
  padding-top: 40px;

  &::placeholder {
    color: #a0a0a0;
  }
  @media screen and (max-width: 768px) {
    &::placeholder {
      color: transparent;
    }
  }
`;

const SubmitBtn = styled.a`
  display: inline-block;
  background-color: #ffffff;
  color: #000000;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 36px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 80%;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 0.6rem;
  }
`;

const Location = styled.img`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <LeftColumn>
        <Title>Contact Us</Title>
        <Subtitle>
          Got a project in mind, or simply looking to partner? Complete the form
          below and we’ll get back to you.
        </Subtitle>
        <FormContainer>
          <FormTitle>CONTACT DETAILS</FormTitle>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Jonathan" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="company">Company</Label>
            <Input type="text" id="company" placeholder="Amaze Studio" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="jonathan@amazestudio.com"
            />
          </FormGroup>
          <FormGroup>
            <MsgLabel htmlFor="message">Message</MsgLabel>
            <Textarea id="message" rows="4" placeholder="How can we help?" />
          </FormGroup>
          <SubmitBtn>Submit Details</SubmitBtn>
        </FormContainer>
      </LeftColumn>
      <RightColumn>
        <Location src={map} />
      </RightColumn>
    </Container>
  );
};

export default Contact;
