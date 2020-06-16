import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 5rem;
  color: #db9ca1;
  @font-face {
    font-family: "Bellinda Christina";
    src: url("/static/fonts/Bellinda Christina demo.otf") format("truetype");
  }
  font-family: "Bellinda Christina";

  @media (min-width: 320px) {
    font-size: 4rem;
  }

  @media (min-width: 320px) {
    font-size: 6rem;
  }

  @media (min-width: 560px) {
    font-size: 7rem;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 7rem;
  }
`;
const ContentMain = () => {
  return (
    <>
      <Contenedor>
        <h1>Estamos trabajando para ti</h1>
      </Contenedor>
    </>
  );
};

export default ContentMain;
