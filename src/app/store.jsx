import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import surahSlice from "../features/surahs-reducer/SurahsSlice";
import audioSlice from "../features/Audio/AudioSlice";
import prayerTimesSlice from "../features/prayer-times-reducer/PrayerTimesSlice";
import radioSlice from '../features/quranRadio/QuranRadioSlice';

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  surahs: surahSlice,
  audio: audioSlice,
  "prayer-times": prayerTimesSlice,
  radio: radioSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 
    }),
});

export const persistor = persistStore(store);
