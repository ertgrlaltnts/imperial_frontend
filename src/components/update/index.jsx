import React from "react";

function Update({ data }) {
  return (
    <div className="container">
      <div style={{ fontSize: 14, fontWeight: "bold" }}>
        Güncelleme Tarihi : {data}
      </div>
    </div>
  );
}

export default Update;
