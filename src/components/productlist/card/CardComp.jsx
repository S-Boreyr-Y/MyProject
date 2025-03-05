import React from "react";
import stylecard from "../../../styles/Productlist/Productlist.module.scss";
import edit from "./image/edit.svg";
import del from "./image/delete.svg";
import img from "./image/image.png"
function CardComp() {
  return (
    <div className={stylecard.container}>
      <div className={stylecard.card}>
        <img src={img} alt="" />
        <div className={stylecard.details}>
          <span className={stylecard.title}>Product Title</span>
          <span className={stylecard.detail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, doloribus?
          </span>
        </div>


        <div className={stylecard.footer}>
          <span className={stylecard.date}>02 Feb 2023</span>
          <div style={{ display: "flex" }}>
            <div className={stylecard.edit}>
              <img src={edit} alt="" />
              <span>Edit</span>
            </div>
            <div className={stylecard.delete}>
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
