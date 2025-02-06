import React from "react";
import { useNavigate } from "react-router-dom";

function SurahCard({ surah, surahNumber }) {
  const navigate = useNavigate();
  const goToSurahDetails = (surahNumber) => {
    
    navigate(`surah/${surahNumber}`);
  };
  return (
    <div className="col-12 col-lg-6 col-xl-4 mb-3" onClick={() => goToSurahDetails(surahNumber)}>
      <div className="surah-info rounded-2 px-4 py-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4">
          <div className="number-surah sarah-number-rotate rounded-3   d-flex align-items-center justify-content-center">
            <span className="sarah-number-rotate-reverse fw-bold m-0 p-0">
              {surah.number}
            </span>
          </div>

          <div className="en-name d-flex flex-column gap-1">
            <p className="m-0 fw-bold">{surah.englishName}</p>
            <p className="m-0">{surah.englishNameTranslation}</p>
          </div>
        </div>
        <div className="arabic-name text-end">
          <p className="m-0 fw-bold">{surah.name}</p>
          <p className="m-0">{surah.numberOfAyahs} Ayahs</p>
        </div>
      </div>
    </div>
  );
}

export default SurahCard;
