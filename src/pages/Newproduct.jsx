import React, { useEffect, useState } from "react";
import stylenewproduct from "../styles/Newproduct/Newproduct.module.scss";
import store from "../components/common/Productheader/images/store-01.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function Newproduct() {
  const [product, setProduct] = useState({
    title:"aaa",
    details:"bbbb"
  });

  const postaxios =  () => {
     axios.post("https://67c56fef351c081993f9d9ff.mockapi.io//product",
      {
        title:product.title,
        details:product.details
      });
  };

  const post=()=>{
    postaxios();
console.log(product)
  }






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
          <Link className={stylenewproduct.btn} onClick={post}>Add product</Link>
        </div>
      </div>
    </div>
  );
}

export default Newproduct;
