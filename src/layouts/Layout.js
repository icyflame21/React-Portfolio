import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import is from 'is_js';
import ErrorLayout from './ErrorLayout';
import { toast, ToastContainer } from 'react-toastify';
import AppContext from 'context/Context';
import Landing from 'components/landing/Landing';
import PageNotFound from 'components/errors/PageNotFound';

const Layout = () => {
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  useContext(AppContext);

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
  }, [HTMLClassList]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<ErrorLayout />}>
          <Route path="errors/404" element={<PageNotFound />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/errors/404" replace />} />
      </Routes>
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={3000}
        newestOnTop={false}
        theme="colored"
      />
    </>
  );
};

export default Layout;
