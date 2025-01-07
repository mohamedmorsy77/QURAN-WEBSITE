import React from "react";
import logo from "../../assets/images/logo.png";
import "../Header/header.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg position-relative ">
      <div className="container">
        <a className="navbar-brand d-flex justify-content-center align-items-center gap-2 header-links-color" href="/">
          <img className="logo" src={logo} alt="logo" /> <span className="text-logo">Quran</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link header-links-color " aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a href="/" className="nav-link header-links-color">
                Surah
              </a>
            </li>
            <li className="nav-item ">
              <a href="/" className="nav-link header-links-color">
                Ayah
              </a>
            </li>
            <li className="nav-item ">
              <a href="/" className="nav-link header-links-color">
                Quran Radio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
