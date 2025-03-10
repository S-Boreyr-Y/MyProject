import React, { useEffect, useState } from "react";
import Cardcomp from "../components/productlist/card/CardComp";
import { Routes, Route } from "react-router-dom";
import stylelist from "../styles/Productlist/Productlist.module.scss";
import Searchcomp from "../components/productlist/search/Searchcomp";
import axios from "axios";
import Productdetails from "./Productdetails";
function Productlist() {
  const [data, setData] = useState([]);

  const getaxios = async () => {
    const res = await axios.get(
      "https://67c56fef351c081993f9d9ff.mockapi.io/product"
    );
    setData(res.data);
  };
  useEffect(() => {
    getaxios();
  }, []);

  // useEffect(() => {
  //   console.log(data)
  // }, [data]);

  return (
    <div>
      <div className={stylelist.searchbox}>
        <Searchcomp />
      </div>
      <div className={stylelist.main}>
        {data.map((item) => {
          return (
           <>           
           <Cardcomp
             key={item.id}
             id={item.id}
             title={item.title}
             detail={item.details}
             date={item.date}
           />
           </>
          );
        })}
      </div>
    </div>
  );
}

export default Productlist;
