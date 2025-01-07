import React from "react";
import logo from "../../assets/images/logo.png";
import "../Header/header.css";
function Header() {
  return (
    <nav class="navbar navbar-expand-lg position-relative ">
      <div class="container">
        <a class="navbar-brand d-flex justify-content-center align-items-center g-5 header-links-color" href="/">
          <img className="logo" src={logo} alt="logo" /> <span>Quran</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="/" class="nav-link header-links-color " aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item ">
              <a href="/" class="nav-link header-links-color">
                Surah
              </a>
            </li>
            <li class="nav-item ">
              <a href="/" class="nav-link header-links-color">
                Ayah
              </a>
            </li>
            <li class="nav-item ">
              <a href="/" class="nav-link header-links-color">
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
