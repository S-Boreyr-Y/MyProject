import React from "react";
import stylenewproduct from "../styles/Newproduct/Newproduct.module.scss";
import store from "../components/common/Productheader/images/store-01.svg";
import { Link } from "react-router-dom";

function Newproduct() {
  return (
    <div>
      <div className={stylenewproduct.newproduct}>
        <div className={stylenewproduct.title1}>
          <img src={store} alt="" />
          <span>Add New Product</span>
        </div>
        <div className={stylenewproduct.elements}>
          <div style={{ marginBottom: "15px" }}>
            <span className={stylenewproduct.spanimgpick}>
              Product Image picker
            </span>
            <input type="text" name="" id="" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <span className={stylenewproduct.title}>title</span>
            <input type="text" name="" id="" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <span className={stylenewproduct.desc}>Description</span>
            <input type="text" name="" id="" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <span className={stylenewproduct.date}>Date</span>
            <input type="text" name="" id="" />
          </div>
        <Link className={stylenewproduct.btn}>Add product</Link>
        </div>
      </div>
    </div>
  );
}

export default Newproduct;
