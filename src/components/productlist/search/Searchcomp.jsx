import React from 'react'
import style from "../../../styles/Productlist/Productlist.module.scss"
import search from "../search/images/search.svg";

export default function Searchcomp() {
  return (
    <div>
              <div className={style.search}>
                <span>search product...</span>
                <img src={search} alt="" />
              </div>
              
    </div>
  )
}
