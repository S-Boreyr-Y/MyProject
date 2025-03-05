import React from "react";
import style from "../../../styles/Productlist/Productlist.module.scss";
import edit from "./image/edit.svg";
import del from "./image/delete.svg";
import img from "./image/image.png"
function CardComp() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src={img} alt="" />
        <div className={style.details}>
          <span className={style.title}>Product Title</span>
          <span className={style.detail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, doloribus?
          </span>
        </div>


        <div className={style.footer}>
          <span className={style.date}>02 Feb 2023</span>
          <div style={{ display: "flex" }}>
            <div className={style.edit}>
              <img src={edit} alt="" />
              <span>Edit</span>
            </div>
            <div className={style.delete}>
              <img src={del} alt="" />
              <span>Delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComp;
