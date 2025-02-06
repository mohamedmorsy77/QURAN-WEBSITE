import React from "react";
import "../Surah/surah.css";
function SectionTitle({ img, title, subTitle }) {
  return (
    <div className="row m-auto text-center info">
      <div className="section-logo ">
        <img src={img} alt="surah-image" />
      </div>
      <span className="mt-3  fs-2 fw-bold">{title}</span>
      <p className="mt-3">{subTitle}</p>
    </div>
  );
}

export default SectionTitle;
