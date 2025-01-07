import React, { useEffect } from "react";
import { Audio, Circles } from "react-loader-spinner";
import suruh from "../../assets/images/suruh-logo.png";
import "./surah.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahsData } from "../../networks/AyahsApi";
function Surah() {
  const { surahsData, error, loading } = useSelector((state) => state.surahs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurahsData());
  }, [dispatch]);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }
  return (
    <section className="suruh py-5">
      <div className="container">
        <div className="row m-auto text-center info">
          <div className="suruh-logo ">
            <img src={suruh} alt="suruh-image" />
          </div>
          <span className="mt-3  fs-2 fw-bold">Surahs of the Quran</span>
          <p className="mt-3">
            The Quran consists of 114 Surahs, each containing a specific number
            of Ayat.
          </p>
        </div>
        <div className="row mt-5">
          {!error &&
            !loading &&
            surahsData &&
            surahsData.data &&
            surahsData.data.map((surah) => (
              <div className="col-12 col-lg-6 col-xl-4 mb-3" key={surah.number}>
                <div className="surah-info px-4 py-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-4">
                    <div className="number-surah sarah-number-rotate  px-3 py-2 d-flex align-items-center justify-content-center">
                      <span className="sarah-number-rotate-reverse">
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
            ))}
        </div>
        <div className="row"></div>
      </div>
    </section>
  );
}

export default Surah;
