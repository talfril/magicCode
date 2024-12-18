import "./App.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import MainPage from "../pages/mainPage/mainPage";
import { theme } from "../theme";
import React from "react";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
