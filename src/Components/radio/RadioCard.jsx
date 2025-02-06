import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

function RadioCard({ id, img, name, url, playingId, audioRefs, togglePlay }) {
  return (
    <div className="">
      <div className="card border-0 shadow">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-row-reverse justify-content-between">
          <p className="card-text">{name}</p>
          {url ? (
            <>
              <button
                className="btn btn-dark rounded-5 d-flex align-items-center justify-content-center play"
                onClick={() => togglePlay(id, url)}
              >
                {playingId === id ? <FaPause /> : <FaPlay />}
              </button>
              <audio ref={(el) => (audioRefs.current[id] = el)} src={url} />
            </>
          ) : (
            <p className="text-danger">Stream not available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RadioCard;
