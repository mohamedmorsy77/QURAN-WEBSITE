import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../Components/Home/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
