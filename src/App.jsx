import React from "react";

import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Router from "./Routes/Router";

const App = () => {
  return (
    <>
      <NavBar />
      <Router />

      <Footer />
    </>
  );
};

export default App;
