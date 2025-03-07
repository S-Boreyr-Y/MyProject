import React, { useEffect } from "react";
import Productheader from "./components/common/Productheader/Productheader";
import Productlist from "./pages/Productlist";
import Searchcomp from "./components/productlist/search/Searchcomp";
import app from "./styles/app/app.module.scss";
import { Link, Route, Router, Routes } from "react-router-dom";
import Newproduct from "./pages/Newproduct";
import Getaxios from "./components/common/axios/Getaxios";
import Productdetails from "./pages/Productdetails";

function App() {
  return (
    <div classname="container">
      <header className={app.header}>
        <Productheader />
      </header>
      <div></div>
      <main className={app.main}>
        <div>
          <Routes>
            <Route path="/" element={<Productlist />}></Route>
            <Route path="products" element={<Productlist />}></Route>
            <Route path="products/:id" element={<Productdetails />}></Route>
            <Route path="/addproduct" element={<Newproduct />}></Route>
          </Routes>
        </div>
      </main>

      <div>
        <Getaxios />
      </div>
    </div>
  );
}

export default App;
