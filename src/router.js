import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Home } from "./pages/home/home";
import { NotFound } from "./components/notFound/notFaound";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
