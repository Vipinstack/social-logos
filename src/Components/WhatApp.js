import React from "react";
import "./WhatApp.css";

const WhatApp = () => {
  return (
    <div className="wrapper">
      <div className="Outer_Circle_ly">
        <div className="Outer_coin_shap"></div>
        <div className="Inner_coin_shap"></div>
        <img src="https://i.postimg.cc/7YSgzZqp/outline-local-phone-white-36dp.png" style={{color:"white", position:"absolute", left:"2.4rem", top:"2.4rem", width:"4rem"}}  />
      </div>
    </div>
  );
};

export default WhatApp;
