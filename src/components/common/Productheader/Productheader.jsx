import React from "react";
import style from "../../../styles/Productheader.module.scss";
import home from "./images/store-01.svg";
import circle from "./images/circle.svg";


function Productheader() {
  return (
    <>
      <div className={style.header}>
        <img src={home} alt="" />
        <span>Product List</span>
        <div>
          <span>Product</span>
          <div className={style.addproduct}>
            <img src={circle} alt="" srcset="" />
            <span>Add Product</span>
          </div>
        </div>
      </div>

    </>
  );
}

export default Productheader;
