import React from "react";
import Productheader from "./components/common/Productheader/Productheader";
import Productlist from "./pages/Productlist";
import Searchcomp from "./components/productlist/search/Searchcomp";
import app from "./styles/app/app.module.scss";
import { Link, Route, Router, Routes } from "react-router-dom";
import Newproduct from "./pages/Newproduct";

function App() {
  return (
    <div classname="container">
      <header className={app.header}>
        <Productheader />
      </header>
      <div>
        <Searchcomp />
      </div>
      <main className={app.main}>
        <Routes>
          <Route path="/AddProduct" element={<Newproduct />}></Route>
        </Routes>
        <Productlist />
        <Productlist />
        <Productlist />
        <Productlist />
        <Productlist />
        <Productlist />
      </main>
    </div>
  );
}

export default App;
