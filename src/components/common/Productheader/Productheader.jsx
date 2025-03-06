import React from "react";
import styleheader from "../../../styles/Productheader.module.scss";
import home from "./images/store-01.svg";
import circle from "./images/circle.svg";
import { Link } from "react-router-dom";
import { Routes, Route, Router } from "react-router-dom";
import Newproduct from "../../../pages/Newproduct";

function Productheader() {
  return (
    <>
      <div className={styleheader.header}>
        <img src={home} alt="" />
        <span>Product List</span>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            Product
          </Link>

          <Link to="addproduct">
            <div className={styleheader.addproduct}>
              <img src={circle} alt="" srcset="" />
              <span>Add Product</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Productheader;
