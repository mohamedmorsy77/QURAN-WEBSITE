import React from "react";

function AyahsPages({ page, ayahs }) {
    
  return (
    <div className="ayahs-page flex-column  d-flex     col-12 mt-5 py-3">
      {ayahs.map((ayah) => (
        <div key={ayah.numberInSurah} className="ayahs-container fw-medium fs-4 d-flex align-items-center flex-row-reverse text-end ">
          <span className="d-flex align-items-center flex-row-reverse">
            {ayah.text} ({ayah.numberInSurah})
          </span>
        </div>
      ))}
      <p className="text-center mt-4 mb-2 ms-3 fw-bold">{page}</p>
    </div>
  );
}

export default AyahsPages;
