import React from "react";
import "./feature.css";


const Feature = ({ title, text}) => {
  return (
    <div className="gpt3__features__container__feature">
      <div className="gpt3__features__container__feature__tittle">
         {<div></div>}

          <h1>{title}</h1>
      </div>
<div className="gpt3__features__container__feature__text">
    {text}
</div>
    </div>
  );
};

export default Feature;
