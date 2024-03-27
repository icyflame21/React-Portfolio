import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorLayout from "./ErrorLayout";
import { toast, ToastContainer } from "react-toastify";
import Landing from "components/landing/Landing";
import PageNotFound from "components/errors/PageNotFound";

const Layout = ({isBelowLargeBreakpoint}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing isBelowLargeBreakpoint={isBelowLargeBreakpoint}/>} />
        <Route element={<ErrorLayout />}>
          <Route path="errors/404" element={<PageNotFound />} />
        </Route>

        <Route path="*" element={<Navigate to="/errors/404" replace />} />
      </Routes>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        rtl={false}
        draggable
        pauseOnFocusLoss
        pauseOnHover
        transition= 'Slide'
        autoClose={3000}
        newestOnTop={false}
        theme="light"
      />
    </>
  );
};

export default Layout;
