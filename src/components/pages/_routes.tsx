import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import HomeCustome from "../Carousel/HomeCustome";
import ProductNewForm from "../CreateTK/ProductNewForm";
import Dashboard from "../Dashboard/Dashboard";
import About from "../Detail/About";
import KetQua from "../KetQua/KetQua";
import Login from "../Login";
import TableUser from "../Table/TableUser";

const Router = (): JSX.Element => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Dashboard />}></Route>
      <Route path="/danhsachnguoidung" element={<TableUser />}></Route>
      <Route path="/taotaikhoan" element={<ProductNewForm />} /> */}
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<HomeCustome />}></Route>
      <Route path="/home/result" element={<KetQua />}></Route>
      <Route path="/home/result/about" element={<About />}></Route>
      {/* <Route path="/taotaikhoan" element={<ProductNewForm />} /> */}
    </Routes>
    // </BrowserRouter>
  );
};

export default Router;
