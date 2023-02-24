import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Classes from "../Pages/Classes/Classes";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Customers from "../Pages/Customers/Customers";
import Products from "../Pages/Products/Products";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </>
  );
};

export default Router;
