import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { usePreferences } from "../../domain/User";
import { Normalize } from "./normalize";
import { schema } from "./schema";

const AppTheme: FunctionComponent = ({ children }) => {
  const { theme } = usePreferences();

  return (
    <>
      <Normalize />
      <ThemeProvider theme={schema[theme]}>{children}</ThemeProvider>
    </>
  );
};

export { AppTheme };
