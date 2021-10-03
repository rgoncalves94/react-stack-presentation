import React from "react";
import { AppTheme } from "./common/Theme";
import { UserProvider } from "./domain/User";
import { Routes } from "./Routes";

const App = () => {
  return (
    <AppTheme>
      <UserProvider>
        <Routes />
      </UserProvider>
    </AppTheme>
  );
};

export default App;
