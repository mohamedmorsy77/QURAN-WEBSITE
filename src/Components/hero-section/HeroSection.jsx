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
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <img
        src={qurankareem}
        className="position-absolute quran-kareem  z-1"
        alt="QuranKareem"
      />
      <div class="carousel-inner h-100">
        <div class="carousel-item active h-100" data-bs-interval="10000">
          <img src={quranThree} class="d-block  h-100 w-100" alt="Quran" />
        </div>
        <div class="carousel-item h-100" data-bs-interval="2000">
          <img src={quranTwo} class="d-block  h-100 w-100" alt="Quran" />
        </div>
        <div class="carousel-item h-100">
          <img src={quranOne} class="d-block  h-100 w-100" alt="Quran" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroSection;
