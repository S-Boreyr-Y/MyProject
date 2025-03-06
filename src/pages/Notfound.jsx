import React from "react";
import stylenotfound from "../styles/Notfound.module.scss";
function Notfound() {
  return (
    <div>
      <h1 className={stylenotfound.t404}>404</h1>
      <h2 className={stylenotfound.tnotfound}>Not Found</h2>
      <span className={stylenotfound.home}>Home</span>
    </div>
  );
}

export default Notfound;
