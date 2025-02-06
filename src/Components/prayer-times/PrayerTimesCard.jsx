import React, { useEffect, useState } from "react";

function PrayerTimesCard({ prayerName, prayerTime, time }) {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const prayerDate = new Date();
      const [hours, minutes] = prayerTime.split(":");
      prayerDate.setHours(hours, minutes, 0, 0);

      if (prayerDate < now) {
        prayerDate.setDate(prayerDate.getDate() + 1);
      }

      const diff = prayerDate - now;
      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setRemainingTime(`${hrs}h ${mins}m ${secs}s`);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [prayerTime]);
  return (
    <div className="col-12 col-md-6 shadow-sm col-lg-4 col-xl-3 text-center  mt-4  rounded-3">
      <div className="info-prayer-times p-3">
        <h4 className="fw-bolder">{prayerName}</h4>
        <div className="d-flex gap-2 align-items-center justify-content-center">
          <span className="d-block fs-5 fw-small">{prayerTime}</span>
          <span>{time}</span>
        </div>
        <p className="mt-3">Next prayer in {remainingTime}</p>
      </div>
    </div>
  );
}

export default PrayerTimesCard;
