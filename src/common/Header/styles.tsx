import styled, { css } from "styled-components";

const HeaderContainer = styled.header`
  display: grid;
  height: 100px;
  grid-template-areas: "logo navigation";
  grid-template-columns: 10% 90%;
  padding: 0 5%;

  ${({
    theme: {
      header: {
        backgroundColor: { primary, secondary },
      },
      borders: { default: defaultBorder },
    },
  }) => css`
    background-color: ${primary};
    border-bottom: ${defaultBorder} ${secondary};
  `}
`;

export { HeaderContainer };
