import React from "react";

function Surahname({ surahDetails }) {
  return (
    <div className="surah-name m-auto text-center">
      <h2 className="col-12  fs-1 fw-bold mb-5">{surahDetails.data.name}</h2>
    </div>
  );
}

export default Surahname;
