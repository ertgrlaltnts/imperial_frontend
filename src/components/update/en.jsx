import React from "react";

function Update({ data }) {
  return (
    <div className="container">
      <div style={{ fontSize: 14, fontWeight: "bold" }}>
        Update Date : {data}
      </div>
    </div>
  );
}

export default Update;
