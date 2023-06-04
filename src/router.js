import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Home } from "./pages/home/home";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
