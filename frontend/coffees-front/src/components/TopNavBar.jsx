import { useState } from "react";
import "./topNavBar.css";

export const TopNavbar = () => {

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
          <a href="/">CATÁLOGO</a>
        </li>
        <li>
          <a href="/admin">ADMIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
