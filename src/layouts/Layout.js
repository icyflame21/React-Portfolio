import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorLayout from "./ErrorLayout";
import PageNotFound from "components/errors/PageNotFound";
import LoadingScreen from "components/landing/LoadingScreen";

const Layout = () => {
  const Landing = React.lazy(() => import("components/landing/Landing"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<ErrorLayout />}>
          <Route path="errors/404" element={<PageNotFound />} />
        </Route>

        <Route path="*" element={<Navigate to="/errors/404" replace />} />
      </Routes>
    </Suspense>
  );
};

export default Layout;
