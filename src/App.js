import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from './layouts/Layout';
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const customStyles = {
    backgroundColor: "#38B6FF",
    borderRadius: "50%",
    boxShadow:'none',
    width: "40px",
    height: "40px",
    zIndex: 10000000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
    },
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop
        smooth
        component={<FaArrowUp className='text-white' />}
        style={customStyles}
      />
      <Layout />
    </Router>
  );
};

export default App;
