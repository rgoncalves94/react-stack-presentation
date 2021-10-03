import styled, { css } from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 35px;
  ${({
    theme: {
      footer: {
        backgroundColor: { primary, secondary },
      },
      borders: { default: defaultBorder },
    },
  }) => css`
    background-color: ${primary};
    border-bottom: ${defaultBorder} ${secondary};
  `}
`;

export { FooterContainer };
