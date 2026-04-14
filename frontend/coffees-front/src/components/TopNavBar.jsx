import React, { useState, useContext } from "react";

import "./topNavBar.css";
{
  /*
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import user from "../../assets/logos/user-orange.png";
import DropDownCard from "./DropDownCard.jsx"
import UserMenu from "../UserMenu.jsx";
import AuthContext from "../../contexts/AuthContext.jsx";*/
}

export const TopNavbar = ({ onLoginClick, onJoinClick, onLogoutClick }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  //const { isAuthenticated, userRole } = useContext(AuthContext);

  //const navigate = useNavigate();

  {
    /*const handleLogoClick = () => {
    navigate('/');
  };*/
  }

  const handleScrollToMaintenance = () => {
    const element = document.getElementById("maintenance-more-info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToRepair = () => {
    const element = document.getElementById("repair-more-info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">☕</span>
        <span className="navbar-title">RC COFFEE</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">CATÁLOGO</a>
        </li>
        <li>
          <a href="#">ADMIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
