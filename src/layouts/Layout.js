import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorLayout from "./ErrorLayout";
import PageNotFound from "components/errors/PageNotFound";
import Landing from "components/landing/Landing";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<ErrorLayout />}>
        <Route path="errors/404" element={<PageNotFound />} />
      </Route>

      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default Layout;
