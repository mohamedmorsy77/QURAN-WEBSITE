import React from "react";
import quranOne from "../../assets/images/quranOne.jpg";
import quranTwo from "../../assets/images/quranTwo.jpg";
import quranThree from "../../assets/images/QuranThree.jpg";
import qurankareem from "../../assets/images/qurankareem.png";
import "./hero-section.css";
function HeroSection() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <img
        src={qurankareem}
        className="position-absolute quran-kareem  z-1"
        alt="QuranKareem"
      />
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100" data-bs-interval="10000">
          <img src={quranThree} className="d-block  h-100 w-100" alt="Quran" />
        </div>
        <div className="carousel-item h-100" data-bs-interval="2000">
          <img src={quranTwo} className="d-block  h-100 w-100" alt="Quran" />
        </div>
        <div className="carousel-item h-100">
          <img src={quranOne} className="d-block  h-100 w-100" alt="Quran" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroSection;
