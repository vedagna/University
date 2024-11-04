import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "../styledComponents/theme";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import { UserProvider } from "../contexts/UserContext";

function AppRouter() {
  return (
    <>
      <Router>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user">
                  <Route path="dashboard" element={<UserDashboard />} />
                </Route>
              </Routes>
            </MainLayout>
          </ThemeProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default AppRouter;
