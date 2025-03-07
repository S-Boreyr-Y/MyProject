import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComp from "../../productlist/card/CardComp";
import Productlist from "../../../pages/Productlist";

function Getaxios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = () => {
      axios
        .get("https://67c56fef351c081993f9d9ff.mockapi.io/product")
        .then((res) => setData(res.data));
    };

    getdata();
  }, []);

  useEffect(() => {
    // console.log(data);
  }, [data]);
  return <div></div>;
}

export default Getaxios;
