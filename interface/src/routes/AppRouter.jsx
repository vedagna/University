import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "../styledComponents/theme";

function AppRouter() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default AppRouter;
