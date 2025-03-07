import React, { useEffect, useState } from "react";
import styledetail from "../styles/Productdetails/Productdetails.module.scss";
import img from "../components/common/images/image.png";
import { useParams } from "react-router-dom";
import axios from "axios";
function Productdetails(props) {
  const params = useParams();
  const [data, setData] = useState([]);

  const getelement = async () => {
    const res = await axios.get(
      `https://67c56fef351c081993f9d9ff.mockapi.io//product/${params.id}`
    );
    setData(res.data);
  };

  useEffect(() => {
    getelement();
  }, []);
  return (
    <div>
      <div className={styledetail.containerdetails}>
        <img src={img} alt="" />
        <span>{data.title}</span>
        <span>{data.details}</span>
        <span>{data.date}</span>
      </div>
    </div>
  );
}

export default Productdetails;
