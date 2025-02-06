import React, { useEffect, useState } from "react";
import suruh from "../../assets/images/suruh-logo.png";
import "./surah.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahsData } from "../../networks/surahsApi";
import SurahCard from "./SurahCard";
import LoadingSpinner from "../spinner/LoadingSpinner";
import SectionTitle from "../SectionTitle/SectionTitle";
function Surah() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allSurahs, setAllSurah] = useState([]);
  const [isAscending, setAscending] = useState(true);
  const { surahsData, error, loading } = useSelector((state) => state.surahs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurahsData());
  }, [dispatch]);

  useEffect(() => {
    if (surahsData.data) {
      setAllSurah(surahsData.data);
    }
  }, [surahsData.data]);
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // remove Diacritics
  const removeDiacritics = (text) => {
    return text.replace(/[\u064B-\u0652\u0617\u0618\u0619\u061A\u0640]/g, "");
  };

  // Filter surahs data
  const filterSurahsData = searchQuery
    ? allSurahs.filter(
        (surah) =>
          surah.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          removeDiacritics(surah.name).includes(removeDiacritics(searchQuery))
      )
    : allSurahs;
  //   sorting function
  const handleSort = () => {
    setAscending(!isAscending);
  };
  // // Sorting the data here depends on the isAscending value and displays it sorted

  let sortedSurahsData = [...filterSurahsData].sort((a, b) => {
    if (isAscending) {
      return a.number - b.number;
    } else {
      return b.number - a.number;
    }
  });

  return (
    <section className="surah py-5">
      <div className="container">
        <SectionTitle
          img={suruh}
          title="Surahs of the Quran"
          subTitle=" The Quran consists of 114 Surahs, each containing a specific number
            of Ayat."
        />
      
        <div className="row mt-3">
          <div className="col-12">
            <input
              type="text"
              className="w-100 rounded-2 search-by-surah-name p-3 shadow-lg"
              placeholder="Search for a Surah..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-end d-flex align-items-center justify-content-end">
            <button className="text-white px-3 py-2 rounded-2" onClick={handleSort}>
              Sort by: {isAscending ? "Ascending" : "Decending"}
            </button>
          </div>
        </div>
        <div className="row mt-5">
          {surahsData &&
            surahsData.data &&
            sortedSurahsData.map((surah) => (
              <SurahCard
                key={surah.number}
                surah={surah}
                surahNumber={surah.number}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Surah;
