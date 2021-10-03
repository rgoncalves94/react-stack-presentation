import styled, { css } from "styled-components";

const LogoContainer = styled.div`
  grid-area: logo;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  margin: 0 20px;
`;

const DefaultLogoSquare = styled.div<{ order: "first" | "second" }>`
  min-width: 30px;
  min-height: 30px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  ${({ order }) => {
    if (order === "first") {
      return css`
        z-index: 100;
        background-color: #f0d57e;
        margin-left: 20px;
      `;
    }
    return css`
      z-index: 80;
      background-color: #cda932;
      margin-left: 25px;
      margin-top: 7px;
    `;
  }};
`;

export { LogoContainer, DefaultLogoSquare };
