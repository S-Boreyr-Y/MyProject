import React from "react";
import Productheader from "./components/common/Productheader/Productheader";
import app from "./styles/app/app.module.scss";
import Productlist from "./pages/Productlist";
import Searchcomp from "./components/productlist/search/Searchcomp"

function App() {
  return (
    <div classname="container">
      <header className={app.header}>
        <Productheader />
      </header>
      <div>
        <Searchcomp />
      </div>
      <main className={app.main}>
        <Productlist/>
        <Productlist/>
        <Productlist/>
        <Productlist/>
        <Productlist/>
        <Productlist/>
      </main>
    </div>
  );
}

export default App;
