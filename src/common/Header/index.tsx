import React, { FunctionComponent } from "react";
import { DefaultLogoSquare, LogoContainer } from "./HeaderLogo/styles";
import { NavigationButton, NavigationContainer } from "./HeaderNavigation";
import { HeaderContainer } from "./styles";

const Header: FunctionComponent = ({ children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <DefaultLogoSquare order="first" />
        <DefaultLogoSquare order="second" />
      </LogoContainer>
      <NavigationContainer>{children}</NavigationContainer>
    </HeaderContainer>
  );
};

export { Header, NavigationButton };
