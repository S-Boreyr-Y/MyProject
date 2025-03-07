
// import stylecard from "../../../styles/Productlist/Productlist.module.scss";
// import edit from "./image/edit.svg";
// import del from "./image/delete.svg";
// import img from "./image/image.png";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function CardComp({ data }) {
//   const [state,setState]=useState(data);
// console.log(data)
// const item=0;
//   return (
//     <div className={stylecard.container}>
//   {data.map((item)=>{
//     return(
// <Link key={item.id} to={`products/${item.id}`} style={{ textDecoration: "none" }}>
//           <div className={stylecard.card}>
//             <img src={img} alt="" />
//             <div className={stylecard.details}>
//               <span className={stylecard.title}>{item.title}</span>
//               <span className={stylecard.detail}>{item.detail}</span>
//             </div>
//             <div className={stylecard.footer}>
//               <span className={stylecard.date}>{item.date}</span>
//               <div style={{ display: "flex" }}>
//                 <div className={stylecard.edit}>
//                   <img src={edit} alt="" />
//                   <span>Edit</span>
//                 </div>
//                 <div className={stylecard.delete}>
//                   <img src={del} alt="" />
//                   <span>Delete</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Link>

//     )
//   })}
        
      
//     </div>
//   );
// }

// export default CardComp;



import stylecard from "../../../styles/Productlist/Productlist.module.scss";
import edit from "./image/edit.svg";
import del from "./image/delete.svg";
import img from "./image/image.png";
import { Link } from "react-router-dom";

function CardComp(props) {

  return (

    <div className={stylecard.container}>
        <Link key={props.id} to={`products/${props.id}`} style={{ textDecoration: "none" }}>
          <div className={stylecard.card}>
            <img src={img} alt="" />
            <div className={stylecard.details}>
              <span className={stylecard.title}>{props.title}</span>
              <span className={stylecard.detail}>{props.detail}</span>
            </div>
            <div className={stylecard.footer}>
              <span className={stylecard.date}>{props.date}</span>
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
        </Link>
  
    </div>
  );
}

export default CardComp;
