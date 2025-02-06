import React from "react";
import ReactAudioPlayer from "react-audio-player";
import LoadingSpinner from "../spinner/LoadingSpinner";
import AyahsPages from "./AyahsPages";
import Surahname from "./Surahname";
import { useOutletContext } from "react-router-dom";

function Ayahs() {
  const { loading, surahDetails, numberOfPages, audioLoading, audioData } =
    useOutletContext();
  return (
    <div className="col-9 ">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="row surah-info container h-100 p-5 d-flex align-items-center  flex-column">
            {/* Surah Name */}
            {surahDetails && surahDetails.data && (
              <>
                <Surahname surahDetails={surahDetails} />
                <div className="surah-audio py-2 d-flex justify-content-between align-items-center ">
                  <div className="d-flex align-item-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.625 0C5.208 0 0 5.208 0 11.625S5.208 23.25 11.625 23.25 23.25 18.042 23.25 11.625 18.042 0 11.625 0m1.162 17.438h-2.325v-6.975h2.326zm0-9.3h-2.325V5.812h2.326z"
                      ></path>
                    </svg>
                    <span>Surah Info</span>
                  </div>
                  <div>
                    {audioLoading ? (
                      <LoadingSpinner />
                    ) : audioData?.audio_file.audio_url ? (
                      <ReactAudioPlayer
                        src={audioData.audio_file.audio_url}
                        controls
                      />
                    ) : (
                      <p>No audio available for this Surah</p>
                    )}
                  </div>
                </div>
                {Object.keys(numberOfPages).map((page) => (
                  <AyahsPages
                    key={page}
                    page={page}
                    ayahs={numberOfPages[page]}
                  />
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Ayahs;
