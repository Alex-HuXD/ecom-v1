import React from "react";
import { FooterContainer, FooterIcons, FooterText } from "./footer.styled";
import { ImLinkedin, ImGithub, ImMail } from "react-icons/im";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Simple eCommerce-site develop by Alex Hu || 2021</FooterText>
      <FooterIcons>
        <a
          className="links"
          href="https://www.linkedin.com/in/alex-hu-b11399b3/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin />
        </a>
        <a
          className="links"
          href="https://github.com/Alex-HuXD"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub />
        </a>
        <a className="links" href="#">
          <ImMail />
        </a>
      </FooterIcons>
    </FooterContainer>
  );
};

export default Footer;
