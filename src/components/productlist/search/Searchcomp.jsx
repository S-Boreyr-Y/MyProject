import React from 'react'
import stylesearch from "../../../styles/Productlist/Productlist.module.scss"
import search from "../search/images/search.svg";

export default function Searchcomp() {
  return (
    <div>
              <div className={stylesearch.search}>
                <span>search product...</span>
                <img src={search} alt="" />
              </div>
              
    </div>
  )
}
