import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import Layout from "./layouts/Layout";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import "./App.css";
import { useMediaQuery, useTheme } from "@mui/material";

const App = () => {
  const customStyles = {
    backgroundColor: "#2f80ed",
    borderRadius: "50%",
    boxShadow: "none",
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

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    Array.from(document.getElementsByClassName("theme-stylesheet")).forEach(
      (link) => link.remove()
    );
    const link = document.createElement("link");
    link.href = `${process.env.PUBLIC_URL}/css/theme.min.css`;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.className = "theme-stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  return (
    <Router>
      {isMatch ? null : (
        <ScrollToTop
          smooth
          component={<FaArrowUp className="text-white" />}
          style={customStyles}
        />
      )}
      <Layout />
    </Router>
  );
};

export default App;
