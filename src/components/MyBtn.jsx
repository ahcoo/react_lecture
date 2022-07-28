import React from "react";

const MyBtn = ({ text, fontSize, isChecked, alertMsg }) => {
  return (
    <button
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        margin: "10px",
        fontSize: `${fontSize}`,
        textDecoration: isChecked ? "line-through" : "none",
      }}
      onClick={() => {
        alert(alertMsg);
      }}
    >
      {text}
    </button>
  );
};

export default MyBtn;
