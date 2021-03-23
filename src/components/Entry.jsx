import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <img className="img-link" src={props.imgURL} alt="Img Diccionario" />
        <br />
        <span className="name">{props.name}</span>
      </dt>
      <dd className="meaning">{props.meaning}</dd>
    </div>
  );
}

export default Entry;
