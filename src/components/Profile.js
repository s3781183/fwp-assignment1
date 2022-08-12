import React from "react";
import "../App";

const Card = () => {
  return (
    <div>
      <div className="card">
        <img
          src="img.jpg"
          alt={localStorage.getItem("name")}
          style={{ width: "100%" }}
        />
        <h1>{localStorage.getItem("name")}</h1>
        <p className="email">Email: {localStorage.getItem("email")}</p>

        <p>
          <button>Edit</button>
        </p>
      </div>
    </div>
  );
};
export default Card;
