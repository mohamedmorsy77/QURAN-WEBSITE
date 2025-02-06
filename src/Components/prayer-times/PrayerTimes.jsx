import React, { useEffect } from "react";
import "./PrayerTimes.css";
import prayer_times_img from "../../assets/images/clock.png";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-hijri";
import SectionTitle from "../SectionTitle/SectionTitle";
import { fetchPrayerTime } from "../../networks/PrayerTimesApi";
import PrayerTimesCard from "./PrayerTimesCard";
function PrayerTimes() {
  
  const hijriDate = moment().format("iD iMMMM, iYYYY");
  const { timings } = useSelector(
    (state) => state["prayer-times"].prayerTimesData
  );

  const dispatch = useDispatch();
  const times = ["PM", "PM", "PM", "PM", "AM", "AM"];
  let timestamp = Date.now();
  const dateNow = new Date(timestamp);
  let options = { day: "2-digit", month: "short", year: "numeric" };
  const displayDate = dateNow.toLocaleDateString("en-GB", options);


  useEffect(() => {
    dispatch(fetchPrayerTime());
  }, [dispatch]);



  return (
    <section className="prayer-times min-vh-100 position-relative p-5">
      <div className="container">
        <SectionTitle
          img={prayer_times_img}
          title="Prayer Times - Stay Connected to Your Faith"
          subTitle="The Prophet ﷺ said: 'Between a man and disbelief is abandoning prayer."
        />
        <div className="row mt-5">
          <div className="col p-5 bg-white shadow-lg">
            <div className="d-flex flex-wrap gap-3  align-items-center  justify-content-between mb-5">
              <h3>Prayer Times</h3>
              <div className="pt-date">
                <p className="m-0">{displayDate}</p>
                <p className="fw-medium m-0">{hijriDate}</p>
              </div>
            </div>

            <div className="row prayer-times-with-name">
              {Object.entries(timings)
                .filter(([name]) => name !== "Sunset")
                .slice(0, 6)
                .map(([prayerName, prayerTime], index) => (
                  <PrayerTimesCard
                    key={index + 1}
                    time={times[index]}
                    prayerName={prayerName}
                    prayerTime={prayerTime}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrayerTimes;
