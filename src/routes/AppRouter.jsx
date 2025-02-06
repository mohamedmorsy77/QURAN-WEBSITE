import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../Components/Home/Home";
import SurahsData from "../Components/Surah/SurahsData";
import Ayahs from "../Components/Surah/Ayahs";
import PrayerTimes from "../Components/prayer-times/PrayerTimes";
import Radio from "../Components/radio/Radio";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prayer-times" element={<PrayerTimes />} />
          <Route path="radio" element={<Radio />} />
          <Route path="surah/:id" element={<SurahsData />} >
            <Route index element={<Ayahs />} />
            <Route path=":id" element={<Ayahs />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
