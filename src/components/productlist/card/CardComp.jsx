
// import stylecard from "../../../styles/Productlist/Productlist.module.scss";
// import edit from "./image/edit.svg";
// import del from "./image/delete.svg";
// import img from "./image/image.png";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios"
// import {useParams} from "react-router-dom"


// function CardComp(props) {
//   const param=useParams();
//   const [delitem, setDelItem]=useState();

//   const deleteHandler = () => {
//     const del=axios.delete(`https://67c56fef351c081993f9d9ff.mockapi.io/product/${param.id}`)
//   }
//   return (

//     <div className={stylecard.container}>

//       <Link key={props.id} to={`products/${props.id}`} style={{ textDecoration: "none" }}>
//         <div className={stylecard.card}>
//           <img src={img} alt="" />
//           <div className={stylecard.details}>
//             <span className={stylecard.title}>{props.title}</span>
//             <span className={stylecard.detail}>{props.detail}</span>
//           </div>
//           <div className={stylecard.footer}>
//             <span className={stylecard.date}>{props.date}</span>
//             <div style={{ display: "flex" }}>
//               <div className={stylecard.edit}>
//                 <img src={edit} alt="" />
//                 <span>Edit</span>
//               </div>
//               <div className={stylecard.delete}>
//                 <img src={del} alt="" />
//                 <span onClick={deleteHandler}>Delete</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>

//     </div>
//   );
// }

// export default CardComp;

import stylecard from "../../../styles/Productlist/Productlist.module.scss";
import edit from "./image/edit.svg";
import del from "./image/delete.svg";
import img from "./image/image.png";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Productlist from "../../../pages/Productlist"

function CardComp(props) {
  const nav=useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);
  const { id } = props; // دریافت id از props

  const deleteHandler = async () => {
    if (!id) {
      console.error("ID is undefined, deletion aborted.");
      return;
    }

    try {
      await axios.delete(`https://67c56fef351c081993f9d9ff.mockapi.io/product/${id}`);
      setIsDeleted(true);
      nav(<Productlist />) // حذف از UI بعد از حذف موفقیت‌آمیز
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  if (isDeleted) return null; // عدم نمایش کارت بعد از حذف

  return (
    <div className={stylecard.container}>
      <Link to={`products/${id}`} style={{ textDecoration: "none" }}>
        <div className={stylecard.card}>
          <img src={img} alt="Product" />
          <div className={stylecard.details}>
            <span className={stylecard.title}>{props.title}</span>
            <span className={stylecard.detail}>{props.detail}</span>
          </div>
          <div className={stylecard.footer}>
            <span className={stylecard.date}>{props.date}</span>
            <div style={{ display: "flex" }}>
              <div className={stylecard.edit}>
                <img src={edit} alt="Edit Icon" />
                <span>Edit</span>
              </div>
              <div className={stylecard.delete} onClick={deleteHandler}>
                <img src={del} alt="Delete Icon" />
                <span>Delete</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardComp;

