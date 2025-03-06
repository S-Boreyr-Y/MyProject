import React from "react";
import Cardcomp from "../components/productlist/card/CardComp";
import { Routes, Route } from "react-router-dom";
import stylelist from "../styles/Productlist/Productlist.module.scss";
import Searchcomp from "../components/productlist/search/Searchcomp";
function Productlist() {
  return (
    <div>
      <div>
        <Searchcomp />
      </div>
      <div className={stylelist.main}>
        <Cardcomp />
        <Cardcomp />
        <Cardcomp />
        <Cardcomp />
        <Cardcomp />
        <Cardcomp />
      </div>
    </div>
  );
}

export default Productlist;
