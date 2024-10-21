import React from "react";

function Update({ data }) {
  return (
    <div className="container">
      <div style={{ fontSize: 14, fontWeight: "bold" }}>
      განახლების თარიღი : {data}
      </div>
    </div>
  );
}

export default Update;
