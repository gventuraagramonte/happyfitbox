import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import redirect from "./RedirectInstagram";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const FooterFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  letter-spacing: 0.5ch;
  color: #db9ca1;

  @font-face {
    font-family: "Caviar Dreams";
    src: local("Caviar Dreams"),
      url(/static/fonts/CaviarDreams) format("truetype");
  }
  font-family: "Caviar Dreams";
`;

const Footer = () => {
  return (
    <>
      <div>
        <FooterFooter>
          <FiInstagram color="#db9ca1" style={{ "margin-right": "1.2rem" }} />
          <FaFacebookF color="#db9ca1" style={{ "margin-right": "1.2rem" }} />
          happyfitbox
        </FooterFooter>
      </div>
    </>
  );
};

export default Footer;
