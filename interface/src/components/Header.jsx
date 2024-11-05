// src/components/Header.js

import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from "../contexts/UserContext"; // Import the useAuth hook

// Styled components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.issticky &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: ${(props) => props.theme.colors.primary};
    `}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};

  .icon {
    margin-right: 0.5rem;
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  a {
    margin-left: 1.5rem;
    color: ${(props) => props.theme.colors.dark};
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

// Main Header component
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { authState } = useAuth(); // Access authState from UserContext

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer issticky={isSticky}>
      <Logo>
        <FontAwesomeIcon icon={faBuildingColumns} className="icon" />
        University Convocation
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {!authState.token ? ( // Check if the user is not authenticated
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        ) : (
          // User is authenticated
          <>
            <NavLink to="/user/dashboard">Dashboard</NavLink>
            <Logout /> {/* Render the Logout component */}
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
