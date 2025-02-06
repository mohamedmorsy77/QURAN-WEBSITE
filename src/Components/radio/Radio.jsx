import React, { useEffect, useRef, useState } from "react";
import "./Radio.css";
import radio_image from "../../assets/images/radio.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchRadio } from "../../networks/RadioApi";

import RadioCard from "./RadioCard";
function Radio() {
  const [playingId, setPlayingId] = useState(null);
  const { radios } = useSelector((state) => state.radio.QuranRadioData);
  const dispatch = useDispatch();
  const audioRefs = useRef({});

  const togglePlay = (id, url) => {
    const audio = audioRefs.current[id];
    if (!url) {
      alert("Streaming link not available");
      return;
    }
    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null) {
        audioRefs.current[playingId]?.pause();
      }

      audio.play();
      setPlayingId(id);
    }
  };

  useEffect(() => {
    dispatch(fetchRadio());
  }, [dispatch]);
  return (
    <section className="radio min-vh-100 position-relative p-5">
      <div className="container">
        <SectionTitle
          img={radio_image}
          title="Quran Radio Stations - Listen to Beautiful Recitations"
          subTitle="Enjoy a variety of recitations from renowned Quran reciters and immerse yourself in the spirituality of the Holy Quran anytime, anywhere."
        />
        <div className="radio-container  mt-5 ">
          {radios && Array.isArray(radios) && radios.length > 0 ? (
            radios.slice(0,19).map(({ id, img, name, url }, index) =>
              url ? (
                <RadioCard
                  key={index + 1}
                  id={id}
                  img={img}
                  name={name}
                  url={url}
                  playingId={playingId}
                  audioRefs={audioRefs}
                  togglePlay={togglePlay}
                />
              ) : (
                <p key={id} className="text-danger">
                  Streaming link not available
                </p>
              )
            )
          ) : (
            <h1> Loading radio stations...</h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default Radio;
