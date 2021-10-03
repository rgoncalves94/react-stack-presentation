import styled from "styled-components";

const NavigationContainer = styled.nav`
  grid-area: navigation;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavigationButton = styled.button`
  margin: 10px 0;
  padding: 0;
  color: black;
  font-weight: bold;
`;

export { NavigationContainer, NavigationButton };
