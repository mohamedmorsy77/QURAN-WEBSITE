import React from "react";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { Link } from "react-router-dom";

function SurahsAside({
  id,
  handleSearch,
  isLoading,
  surahsData,
  filterSurahsData,
}) {
   
  return (
    <div className="col-3  py-5 px-4 surah-details-aside">
      <div>
        <input
          type="text"
          className="w-100 .search-by-surah-name rounded-2 search-by-surah-name border-0 p-2 shadow-lg"
          placeholder="Search for a Surah..."
          onChange={handleSearch}
        />
      </div>

      <ul className="surahs-list list-unstyled mt-5 mb-5">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          surahsData &&
          surahsData.data &&
          filterSurahsData.map((surah) => (
            <li key={surah.number} className="mt-2 p-2 rounded-2">
              <Link
                to={`/surah/${id}/${surah.number}`}
                className="text-decoration-none"
              >
                <span>
                  {surah.number}- {surah.name}
                </span>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default React.memo(SurahsAside);
