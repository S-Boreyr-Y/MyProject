import React from "react";
import style from "../styles/Productdetails/Productdetails.module.scss"
import img from "../components/common/images/image.png"
function Productdetails() {
  return (
    <div>
      <div className={style.container}>
        <img src={img} alt="" />
        <span>Product Title 3</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          minus amet ea dolore dicta ut odit quia maiores doloribus quam
          temporibus obcaecati, natus architecto rem non eveniet. Vero cum sed
          inventore laudantium, repudiandae ipsam, facilis quisquam nesciunt
          quam dignissimos officiis ut temporibus velit? Sit autem non aperiam
          accusantium vel illo. Laboriosam maxime enim inventore aliquam,
          eligendi molestiae mollitia odio. Consequuntur voluptatibus numquam et
          sequi dolorem tempore enim. Asperiores explicabo vitae pariatur
          repellendus aliquam dignissimos mollitia porro itaque unde dicta
          minima laudantium quam excepturi ea molestias numquam deleniti nisi
          est necessitatibus atque, fugit vero blanditiis quisquam. Fugit
          voluptates a blanditiis quaerat.
        </span>
        <span>Published on 02 Feb 2023</span>
      </div>
    </div>
  );
}

export default Productdetails;
