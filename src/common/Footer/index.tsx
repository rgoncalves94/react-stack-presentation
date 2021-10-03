import React, { FunctionComponent } from "react";
import { FooterContainer } from "./styles";

const Footer: FunctionComponent = ({ children }) => (
  <FooterContainer>{children}Footer</FooterContainer>
);

export { Footer };
