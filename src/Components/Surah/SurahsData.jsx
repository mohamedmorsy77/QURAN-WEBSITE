import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Outlet, useParams } from "react-router-dom";
import { fetchSurahsDetails } from "../../networks/surahsApi";

import "./surah.css";



import { fetchAudio } from "../../networks/audioApi";
import { search } from "../../features/surahs-reducer/SurahsSlice";
import { useMemo } from "react";

import SurahsAside from "./SurahsAside";

function SurahsData() {
  let { id } = useParams();
  const searchValue = useSelector((state) => state.surahs.searchQuery);
  const [allSurahsData, setAllSurahData] = useState([]);
  const { surahsData, loading: surahLoding } = useSelector(
    (state) => state.surahs
  );
  const { loading, surahDetails } = useSelector((state) => state.surahs);
  const { loading: audioLoading, audioData } = useSelector(
    (state) => state.audio
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (surahsData.data) {
      setAllSurahData(surahsData.data);
    }
  }, [surahsData.data]);
  //  Remove Diacritics
  const removeDiacritics = (text) => {
    return text.replace(/[\u064B-\u0652\u0617\u0618\u0619\u061A\u0640]/g, "");
  };

  // Search

  const handleSearch = useCallback(
    (e) => {
      dispatch(search(e.target.value));
    },
    [dispatch]
  );
  let filterSurahsData = useMemo(() => {
    return searchValue
      ? allSurahsData.filter((surah) => {
          return removeDiacritics(surah.name).includes(
            removeDiacritics(searchValue)
          );
        })
      : allSurahsData;
  }, [allSurahsData, searchValue]);

  useEffect(() => {
    dispatch(fetchSurahsDetails(id));
    dispatch(fetchAudio({ id: 65, chapter: id }, id));
  }, [dispatch, id]);

  // Pages of the surahs

  const getPagesSurahs = (ayahs) => {
    const pages = {};

    ayahs.forEach((ayah) => {
      if (!pages[ayah.page]) {
        pages[ayah.page] = [];
      }

      pages[ayah.page].push(ayah);
    });

    return pages;
  };
  // loading check

  const isLoading =
  surahLoding || loading || audioLoading || !surahDetails || !audioData;

  // pages 
  const numberOfPages =
    surahDetails && surahDetails.data
      ? getPagesSurahs(surahDetails.data.ayahs)
      : {};
  return (
    <section className="row m-0 surah-details">
      <SurahsAside
        id={id}
        handleSearch={handleSearch}
        surahLoding={isLoading}
        surahsData={surahsData}
        filterSurahsData={filterSurahsData}
      />

      <Outlet
        context={{
          loading,
          surahDetails,
          numberOfPages,
          audioLoading,
          audioData,
        }}
      />
    </section>
  );
}

export default SurahsData;
